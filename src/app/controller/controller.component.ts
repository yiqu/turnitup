import { Component } from '@angular/core';
import { ScoreService } from '../shared/score.service';

@Component({
  moduleId: module.id,
  selector: 'controller',
  templateUrl: 'controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  // HTML Elements var's
  slider: HTMLElement = null;
  icon: HTMLElement = null;
  indicator: HTMLElement = null;
  shape: HTMLElement = null;
  input: any = null;
  lock: boolean;
  charging: boolean;
  _charge: number;
  _volume: number;
  volumeSelected: number;
  turnChange: number = 0;
  

  /**
   * Constructor
   * 
   */
  constructor(public scoreService: ScoreService){}


  /**
   * On init. Get the html elements after it has rendered on the page.
   * 
   */
  ngOnInit() { 
    this.slider = document.getElementById('volume-slider');
    this.icon = document.getElementById('volume-icon');
    this.indicator = document.getElementById('volume-indicator');
    this.shape = document.getElementById('circle-mask-shape');
    this.input = document.getElementById('volume-input');

    this.lock = false;
    this.charging = false;
    this._charge = 0;
    this._volume = 0;

    // Set init volume to 0
    this.input.value = this._volume;

    // Decide if device is Touch or Mouse
    this.scoreService.isTouchDevice = this.isTouchDevice();
   }


  /**
   * Detect if the device is a touch based device. Not 100% stable.
   * 
   */
  isTouchDevice(): boolean {
    return 'ontouchstart' in window        // works on most browsers 
        || 'onmsgesturechange' in window;  // works on IE10 with some false positives
  };


  /**
   * Mouse down event handler
   * 
   */
  mouseDown(event) {
    event.preventDefault();
    if (!this.scoreService.isTouchDevice) {
      this.charge();
    }
  }


  /**
   * Mouse up event handler
   * 
   */
  mouseUp(event) {
    event.preventDefault();
    if (!this.scoreService.isTouchDevice) {
      this.release(this._charge);
    }
  }


  /**
   * Mobile press down event handler
   * 
   */
  touchStart(event) {
    event.preventDefault();
    if (this.scoreService.isTouchDevice) {
      this.charge();
    }
  }


  /**
   * Mobile press let go event handler
   * 
   */
  touchEnd(event) {
    event.preventDefault();
    if (this.scoreService.isTouchDevice) {
      this.release(this._charge);
    }
  }


  /**
   * Begin charge cycle
   * 
   */
  charge(): boolean {
    if (this.lock) { 
      return false; 
    }

    this.lock = true;

    // Reset volume
    this._charge = 0;
    this.charging = true;

    // Hide indicator
    this.indicator.style.visibility = 'hidden';
    this.indicator.style.opacity = '0';

    /**
     * Charge loop
     */
    let cycle = () => {
      if (this.charging && ++this._charge < 100) {
        requestAnimationFrame(() => {
          cycle();
        });
      }

      // Update icon styles
      this.shape.style.transform = `scale(${this._charge / 100})`;
      this.icon.style.transform  = `rotate(${-0.35 * this._charge}deg)`;
    };

    setTimeout(() => cycle(), 100);
  }


  /**
   * Release and fire based on charge
   * 
   * @param  {float} charge
   * 
   */
  release(charge): void {
    // Reset charge animation
    this.charging = false;
    requestAnimationFrame(() => { 
      this.shape.style.transform = `scale(0)`; 
    });

    // Animation vars
    let y_cap = charge * 0.35,
        y_start = -0.3 * charge,
        x_cap = charge * 2,
        x_start = -10,
        duration = 20 + (4 * charge),
        start = new Date().getTime(),
        volume = this._volume,
        rotate;

    // Y animation
    let y_swap = duration * 0.55;

    let y_duration_up = y_swap,
        y_duration_down = duration - y_swap;

    let y = y_start,
        y_diff_up = -y_cap,
        y_diff_down = (y_cap - y_start);

    // X animation
    let x = x_cap,
        x_diff = x_cap - 10;

    // Display indicator
    this.indicator.style.visibility = 'visible';
    this.indicator.style.opacity = '1';

    /**
     * Animation loop
     */
    let animate = () => {
      let elapsed = new Date().getTime() - start;

      if (elapsed < duration) {
        // Animate
        requestAnimationFrame(() => { 
          animate(); 
        });

        if (elapsed < y_duration_up) {
          // Y up
          y = this.easeOut(elapsed, y_start, y_diff_up, y_duration_up);
        } else {
          // Y down
          y = this.easeIn(elapsed - y_duration_up, y_start - y_cap, y_diff_down, y_duration_down);
        }

        // Set values
        x = this.linearTween(elapsed, 0, x_diff, duration);
        rotate = this.easeInOut(elapsed, -0.35 * this._charge, 0.35 * this._charge, duration);
        this._volume = this.easeOut(elapsed, volume, charge - volume, duration);
      } else {
        // End of animation
        this.lock = false;

        // Set values
        x = x_cap;
        y = 0;
        rotate = 0;
        this._volume = charge;
      }

      // Render values
      this.icon.style.transform = `rotate(${rotate}deg)`;
      this.indicator.style.transform = `translateX(${x}px) translateY(${y}px)`;
      this.input.value = this._volume;
    };

    animate();
    
    this.volumeSelected = this._charge;
    this.turnChange ++;
    //console.log('your volume: '  + this.volumeSelected + '. Turn: '+this.turnChange);
  }


  /**
   * Linear progression
   */
  linearTween(t, b, c, d): number {
    return c*t/d + b;
  }


  /**
   * Cubic ease-in progression
   */
  easeIn(t, b, c, d): number {
    t /= d;
    return c*t*t*t + b;
  }


  /**
   * Cubic ease-out progression
   */
  easeOut(t, b, c, d): number {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
  }


  /**
   * Cubic ease-in-out progression
   */
  easeInOut(t, b, c, d): number {
    t /= d/2;
    if (t < 1){
      return c/2*t*t*t + b;
    }
    t -= 2;
    return c/2*(t*t*t + 2) + b;
  }

}