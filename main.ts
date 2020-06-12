//%  weight=100 color=#00cdcd blockGap=8
//% groups='["Create", "Properties"]'
namespace spinner {
    class Spinner {
        private _polygon: Polygon = null;
        private _speed: number = 0;
        //% blockSetVariable="mySpinner"
        //% blockCombine block="polygon"
        //% group="Properties"
        get polygon(): Polygon {
            return this._polygon;
        }//% group="Properties"
        //% blockSetVariable="mySpinner"
        //% blockCombine block="speed"
        get speed(): number {
            return this._speed;
        }
        //% group="Properties"
        //% blockSetVariable="mySpinner"
        //% blockCombine block="speed"
        set speed(value: number) {
            this._speed = value;
        }
        constructor(polygon: Polygon, speed: number = 5) {
            this._polygon = polygon;
            this._speed = speed;
        }
    }
}
