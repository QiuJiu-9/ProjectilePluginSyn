//=============================================================================
// RPG Maker MZ - QJ-Core.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc [Core Of QJPlugin][V1.0]
 * @author Qiu Jiu
 *
 * @help QJ-Core.js
* ======================================================
 * This plugin container the follow function.
 * [这个插件主要有如下功能]
 * Ⅰ.Simple js script.[便捷指令]
 * Ⅱ.Add Input.[增加按键]
 * Ⅲ.Dramatic effect core.[动态效果核心]
 * Ⅳ.SAT.[SAT算法核心]
 * Ⅴ.More Layer.[更多的图层]
 * Ⅵ.Particle Core.[粒子核心]
 * ⅦⅧⅨⅩⅪⅫ
* ======================================================
 * Ⅰ.Simple js script.[便捷指令]
 *
 * This plugin offer the easy-to-use js command below:
 * [这个插件提供了如下便捷脚本指令：]
 * The params in code [] are the Optional parameters.
 * [下方被包在符号[]中的参数是可选参数.]
 *
 * 1.open/close the self switch.[打开或者关闭独立开关]
 *
 *   QJ.ss(eventId,selfSwitchName,value[,mapId]);
 *
 *   eventId: 0 refer to the current eventId.
 *   selfSwitchName: 'A','B','C' or 'D'.
 *   value: true/1 or false/0.
 *   mapId: the map id.Don`t write or write 0 represents the current map.
 *          [地图编号。不写或者写0时代表当前地图。]
* ======================================================
 * Ⅱ.Add Input.[增加按键]
 *
 *  Press    [判断是否按着某个按键]: Input.isPressed(keyName)
 *  Trigger  [判断是否按下某个按键]: Input.isTriggered(keyName)
 *  Repeat   [判断是否重复按某按键]: Input.isRepeated(keyName)
 *  LongPress[判断是否长按某个按键]: Input.isLongPressed(keyName) 
 *
 *  Note:
 *  1.The js don`t differentiate the left and right shift/ctrl/alt.
 *    [js不区分左右shift/ctrl/alt按键]
 *  2.prefer not to use print screen and Num Lock.
 *    [最好不要区分截图键(print screen)和数字锁定键(Num Lock)] 
 * --------------------------------------------------------
 * key code | key name | note
 * [键值]    |  [键码]  | [备注]
 * --------------------------------------------------------
 *    8   ->  backspace
 *    9   ->  tab
 *    12  ->  clear 
 *    13  ->  enter
 *    16  ->  shift
 *    17  ->  control
 *    18  ->  alt
 *    19  ->  pause
 *    20  ->  caps lock
 *    27  ->  esc
 *    32  ->  space
 *    33  ->  pageup
 *    34  ->  pagedown
 *    35  ->  end
 *    36  ->  home
 *    37  ->  left
 *    38  ->  up            
 *    39  ->  right
 *    40  ->  down
 *    44  ->  print screen  ->  invalid[无效]
 *    45  ->  insert
 *    46  ->  del
 *    48  ->  num 0
 *    49  ->  num 1
 *    50  ->  num 2
 *    51  ->  num 3
 *    52  ->  num 4
 *    53  ->  num 5
 *    54  ->  num 6
 *    55  ->  num 7
 *    56  ->  num 8
 *    57  ->  num 9
 *    65  ->  A
 *    66  ->  B
 *    67  ->  C
 *    68  ->  D
 *    69  ->  E
 *    70  ->  F
 *    71  ->  G
 *    72  ->  H
 *    73  ->  I
 *    74  ->  J
 *    75  ->  K
 *    76  ->  L
 *    77  ->  M
 *    78  ->  N
 *    79  ->  O
 *    80  ->  P
 *    81  ->  Q
 *    82  ->  R
 *    83  ->  S
 *    84  ->  T
 *    85  ->  U
 *    86  ->  V
 *    87  ->  W
 *    88  ->  X
 *    89  ->  Y
 *    90  ->  Z
 *    91  ->  L Win  ->  prefer not to use[最好不要用]
 *    92  ->  R Win  ->  prefer not to use[最好不要用]
 *    93  ->  select
 *    96  ->  numpad 0
 *    97  ->  numpad 1
 *    98  ->  numpad 2
 *    99  ->  numpad 3
 *    100 ->  numpad 4
 *    101 ->  numpad 5
 *    102 ->  numpad 6
 *    103 ->  numpad 7
 *    104 ->  numpad 8
 *    105 ->  numpad 9
 *    106 ->  numpad *
 *    107 ->  numpad +
 *    109 ->  numpad -
 *    110 ->  numpad .
 *    111 ->  numpad /
 *    112 ->  F1
 *    113 ->  F2  ->  used to open FPS window[被用来打开帧率显示]
 *    114 ->  F3  ->  prefer not to use[最好不要用]
 *    115 ->  F4  ->  prefer not to use[最好不要用]
 *    116 ->  F5  ->  prefer not to use[最好不要用]
 *    117 ->  F6
 *    118 ->  F7
 *    119 ->  F8
 *    120 ->  F9
 *    121 ->  F10
 *    122 ->  F11
 *    123 ->  F12  ->  prefer not to use[最好不要用]
 *    144 ->  num lock  ->  prefer not to use[最好不要用]
 *    145 ->  scroll lock  ->  prefer not to use[最好不要用]
 *    186 ->  ;
 *    187 ->  =
 *    188 ->  ,
 *    189 ->  -
 *    190 ->  .
 *    191 ->  /
 *    192 ->  `
 *    219 ->  [
 *    220 ->  \
 *    221 ->  ]
 *    222 ->  '
 * --------------------------------------------------------
* ======================================================
 * Ⅲ.Dramatic effect core.[动态效果核心]
 *   The function of making dramatic effect can be used in my other plugin.
 *   [这个插件包含一个制作动态效果的核心功能，这个功能被其他插件普遍使用]
* ======================================================
 * Ⅳ.SAT.[SAT算法核心]
 *   The SAT used in my other plugin.
 *   [我的其他插件需要的SAT算法]
* ======================================================
 * Ⅴ.More Layer.[更多的图层]
 *    below parallax/map/event/picture [背景图，地图，事件，图片之下]
 *    below map/event/picture          [地图，事件，图片之下]
 *    below event/picture              [事件，图片之下]
 *    below picture                    [图片之下]
 *    above all                        [在所有图层之上]
* ======================================================
 * Ⅵ.Particle Core.[粒子核心]
 *    The core script of particle.
 *    [粒子系统的核心]
* ======================================================
* ======================================================
 *
*/
//=============================================================================
//Traditional Habit from......Yep?May be.
//=============================================================================
var QJ = QJ || {};
var Imported = Imported || {};
Imported.QJCore = true;
//======================
QJ.reWrite = {};//The main reWrite function.
QJ.Pointer = null;//The pointer.
QJ.tileSize = 48;
//======================
//=============================================================================
//
//=============================================================================
QJ.getPointer = function(value) {
    return (typeof QJ.Pointer == "number")?$gameMap.event(QJ.Pointer):$gameMap.event(QJ.Pointer.eventId());
};
QJ.getPointerId = function(value) {
    return (typeof QJ.Pointer == "number")?$gameMap.event(QJ.Pointer).eventId():$gameMap.event(QJ.Pointer.eventId()).eventId();
};
//=============================================================================
//
//=============================================================================
QJ.ss = function(eventId,name,value,mapId) {
    $gameSelfSwitches.setValue([mapId||$gameMap.mapId(),QJ.getPointerId(eventId),name.toUpperCase()],!!value);
};
//=============================================================================
//
//=============================================================================
/*!
 * SAT.js - v0.9.0
 * License MIT
 * url https://github.com/jriecken/sat-js
 * build by QiuJiu
*/
if (true) {
    //=================================================
    function SATVector(x, y) {
        this['x'] = x || 0;
        this['y'] = y || 0;
    }
    SATVector.prototype.copy = function (other) {
        this['x'] = other['x'];
        this['y'] = other['y'];
        return this;
    };
    SATVector.prototype.clone = function () {
        return new SATVector(this['x'], this['y']);
    };
    SATVector.prototype.perp = function () {
        var x = this['x'];
        this['x'] = this['y'];
        this['y'] = -x;
        return this;
    };
    SATVector.prototype.rotate = function (angle) {
        var x = this['x'];
        var y = this['y'];
        this['x'] = x * Math.cos(angle) - y * Math.sin(angle);
        this['y'] = x * Math.sin(angle) + y * Math.cos(angle);
        return this;
    };
    SATVector.prototype.reverse = function () {
        this['x'] = -this['x'];
        this['y'] = -this['y'];
        return this;
    };
    SATVector.prototype.normalize = function () {
        var d = this.len();
        if (d > 0) {
            this['x'] = this['x'] / d;
            this['y'] = this['y'] / d;
        }
        return this;
    };
    SATVector.prototype.add = function (other) {
        this['x'] += other['x'];
        this['y'] += other['y'];
        return this;
    };
    SATVector.prototype.sub = function (other) {
        this['x'] -= other['x'];
        this['y'] -= other['y'];
        return this;
    };
    SATVector.prototype.scale = function (x, y) {
        this['x'] *= x;
        this['y'] *= typeof y != 'undefined' ? y : x;
        return this;
    };
    SATVector.prototype.project = function (other) {
        var amt = this.dot(other) / other.len2();
        this['x'] = amt * other['x'];
        this['y'] = amt * other['y'];
        return this;
    };
    SATVector.prototype.projectN = function (other) {
        var amt = this.dot(other);
        this['x'] = amt * other['x'];
        this['y'] = amt * other['y'];
        return this;
    };
    SATVector.prototype.reflect = function (axis) {
        var x = this['x'];
        var y = this['y'];
        this.project(axis).scale(2);
        this['x'] -= x;
        this['y'] -= y;
        return this;
    };
    SATVector.prototype.reflectN = function (axis) {
        var x = this['x'];
        var y = this['y'];
        this.projectN(axis).scale(2);
        this['x'] -= x;
        this['y'] -= y;
        return this;
    };
    SATVector.prototype.dot = function (other) {
        return this['x'] * other['x'] + this['y'] * other['y'];
    };
    SATVector.prototype.len2 = function () {
        return this.dot(this);
    };
    SATVector.prototype.len = function () {
        return Math.sqrt(this.len2());
    };
    //=================================================
    function SATCircle(pos, r) {
        this['pos'] = pos || new SATVector();
        this['r'] = r || 0;
        this['offset'] = new SATVector();
    }
    SATCircle.prototype.getAABBAsBox = function () {
        var r = this['r'];
        var corner = this['pos'].clone().add(this['offset']).sub(new SATVector(r, r));
        return new SATBox(corner, r * 2, r * 2);
    };
    SATCircle.prototype.getAABB = function () {
        return this.getAABBAsBox().toPolygon();
    };
    SATCircle.prototype.setOffset = function (offset) {
        this['offset'] = offset;
        return this;
    };
    //=================================================
    function SATPolygon(pos, points) {
        this['pos'] = pos || new SATVector();
        this['angle'] = 0;
        this['offset'] = new SATVector();
        this.setPoints(points || []);
    }
    SATPolygon.prototype.setPoints = function (points) {
        var lengthChanged = !this['points'] || this['points'].length !== points.length;
        if (lengthChanged) {
            var i;
            var calcPoints = this['calcPoints'] = []; 
            var edges = this['edges'] = [];
            var normals = this['normals'] = [];
            for (i = 0; i < points.length; i++) {
                var p1 = points[i];
                var p2 = i < points.length - 1 ? points[i + 1] : points[0];
                if (p1 !== p2 && p1.x === p2.x && p1.y === p2.y) {
                    points.splice(i, 1);
                    i -= 1;
                    continue;
                }
                calcPoints.push(new SATVector());
                edges.push(new SATVector());
                normals.push(new SATVector());
            }
        }
        this['points'] = points;
        this._recalc();
        return this;
    };
    SATPolygon.prototype.setAngle = function (angle) {
        this['angle'] = angle;
        this._recalc();
        return this;
    };
    SATPolygon.prototype.setOffset = function (offset) {
        this['offset'] = offset;
        this._recalc();
        return this;
    };
    SATPolygon.prototype.rotate = function (angle) {
        var points = this['points'];
        var len = points.length;
        for (var i = 0; i < len; i++) {    
            points[i].rotate(angle);  
        }  
        this._recalc();  
        return this;
    };
    SATPolygon.prototype.translate = function (x, y) {  
        var points = this['points'];  
        var len = points.length;  
        for (var i = 0; i < len; i++) {    
            points[i]['x'] += x;    
            points[i]['y'] += y;  
        }  
        this._recalc();  
        return this;
    };
    SATPolygon.prototype._recalc = function () {  
        var calcPoints = this['calcPoints'];  
        var edges = this['edges'];  
        var normals = this['normals'];  
        var points = this['points'];  
        var offset = this['offset'];  
        var angle = this['angle'];  
        var len = points.length;  
        var i;  
        for (i = 0; i < len; i++) {    
            var calcPoint = calcPoints[i].copy(points[i]);    
            calcPoint['x'] += offset['x'];    
            calcPoint['y'] += offset['y'];    
            if (angle !== 0) {      
                calcPoint.rotate(angle);    
            }  
        }  
        for (i = 0; i < len; i++) {    
            var p1 = calcPoints[i];    
            var p2 = i < len - 1 ? calcPoints[i + 1] : calcPoints[0];    
            var e = edges[i].copy(p2).sub(p1);    
            normals[i].copy(e).perp().normalize();  
        }  
        return this;
    };
    SATPolygon.prototype.getAABBAsBox = function () {  
        var points = this['calcPoints'];  
        var len = points.length;  
        var xMin = points[0]['x'];  
        var yMin = points[0]['y'];  
        var xMax = points[0]['x'];  
        var yMax = points[0]['y'];  
        for (var i = 1; i < len; i++) {    
            var point = points[i];    
            if (point['x'] < xMin) {      
                xMin = point['x'];    
            } else if (point['x'] > xMax) {      
                xMax = point['x'];    
            }    
            if (point['y'] < yMin) {      
                yMin = point['y'];    
            } else if (point['y'] > yMax) {      
                yMax = point['y'];    
            }  
        }
        return new SATBox(this['pos'].clone().add(new SATVector(xMin, yMin)), xMax - xMin, yMax - yMin);
    };
    SATPolygon.prototype.getAABB = function () {  
        return this.getAABBAsBox().toPolygon();
    };
    SATPolygon.prototype.getCentroid = function () {  
        var points = this['calcPoints'];  
        var len = points.length;  
        var cx = 0;  
        var cy = 0;  
        var ar = 0;  
        for (var i = 0; i < len; i++) {    
            var p1 = points[i];    
            var p2 = i === len - 1 ? points[0] : points[i + 1];    
            var a = p1['x'] * p2['y'] - p2['x'] * p1['y'];    
            cx += (p1['x'] + p2['x']) * a;    
            cy += (p1['y'] + p2['y']) * a;    
            ar += a;  
        }  
        ar = ar * 3;  
        cx = cx / ar;  
        cy = cy / ar;  
        return new SATVector(cx, cy);
    };
    //=================================================
    function SATBox(pos, w, h) {  
        this['pos'] = pos || new SATVector();  
        this['w'] = w || 0;  
        this['h'] = h || 0;
    }
    SATBox.prototype.toPolygon = function () {  
        var pos = this['pos'];  
        var w = this['w'];  
        var h = this['h'];  
        return new SATPolygon(new SATVector(pos['x'], pos['y']), [    
            new SATVector(), new SATVector(w, 0),    
            new SATVector(w, h), 
            new SATVector(0, h)  ]);
    };
    //=================================================
    function SATResponse() {  
        this['a'] = null;  
        this['b'] = null;  
        this['overlapN'] = new SATVector();  
        this['overlapV'] = new SATVector();  
        this.clear();
    }
    SATResponse.prototype.clear = function () {  
        this['aInB'] = true;  
        this['bInA'] = true;  
        this['overlap'] = Number.MAX_VALUE;  
        return this;
    };
    //=================================================
    var T_VECTORS = [];
    for (var i = 0; i < 10; i++) { 
        T_VECTORS.push(new SATVector()); 
    }
    var T_ARRAYS = [];
    for (var i = 0; i < 5; i++) { 
        T_ARRAYS.push([]); 
    }
    var T_RESPONSE = new SATResponse();
    var TEST_POINT = new SATBox(new SATVector(), 0.000001, 0.000001).toPolygon();
    //=================================================
    function flattenPointsOn(points, normal, result) {  
        var min = Number.MAX_VALUE;  
        var max = -Number.MAX_VALUE;  
        var len = points.length;  
        for (var i = 0; i < len; i++) {    
            var dot = points[i].dot(normal);    
            if (dot < min) { 
                min = dot; 
            }    
            if (dot > max) { 
                max = dot; 
            }  
        }  
        result[0] = min; 
        result[1] = max;
    }
    //=================================================
    function isSeparatingAxis(aPos, bPos, aPoints, bPoints, axis, response) {  
        var rangeA = T_ARRAYS.pop();  
        var rangeB = T_ARRAYS.pop();  
        var offsetV = T_VECTORS.pop().copy(bPos).sub(aPos);  
        var projectedOffset = offsetV.dot(axis);  
        flattenPointsOn(aPoints, axis, rangeA);  
        flattenPointsOn(bPoints, axis, rangeB);  
        rangeB[0] += projectedOffset;  
        rangeB[1] += projectedOffset;  
        if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {    
            T_VECTORS.push(offsetV);    
            T_ARRAYS.push(rangeA);    
            T_ARRAYS.push(rangeB);    
            return true;  
        }  
        if (response) {    
            var overlap = 0;    
            if (rangeA[0] < rangeB[0]) {      
                response['aInB'] = false;      
                if (rangeA[1] < rangeB[1]) {        
                    overlap = rangeA[1] - rangeB[0];        
                    response['bInA'] = false;      
                } else {        
                    var option1 = rangeA[1] - rangeB[0];        
                    var option2 = rangeB[1] - rangeA[0];        
                    overlap = option1 < option2 ? option1 : -option2;      
                }    
            } else {      
                response['bInA'] = false;      
                if (rangeA[1] > rangeB[1]) {        
                    overlap = rangeA[0] - rangeB[1];        
                    response['aInB'] = false;      
                } else {        
                    var option1 = rangeA[1] - rangeB[0];        
                    var option2 = rangeB[1] - rangeA[0];        
                    overlap = option1 < option2 ? option1 : -option2;      
                }    
            }    
            var absOverlap = Math.abs(overlap);    
            if (absOverlap < response['overlap']) {      
                response['overlap'] = absOverlap;      
                response['overlapN'].copy(axis);      
                if (overlap < 0) {        
                    response['overlapN'].reverse();
                }    
            }  
        }  
        T_VECTORS.push(offsetV);  
        T_ARRAYS.push(rangeA);  
        T_ARRAYS.push(rangeB);  
        return false;
    }
    //=================================================
    function voronoiRegion(line, point) {  
        var len2 = line.len2();  
        var dp = point.dot(line);  
        if (dp < 0) { 
            return LEFT_VORONOI_REGION; 
        } else if (dp > len2) { 
            return RIGHT_VORONOI_REGION; 
        } else { 
            return MIDDLE_VORONOI_REGION; 
        }
    }
    //=================================================
    var LEFT_VORONOI_REGION = -1;
    var MIDDLE_VORONOI_REGION = 0;
    var RIGHT_VORONOI_REGION = 1;
    //=================================================
    function pointInCircle(p, c) {  
        var differenceV = T_VECTORS.pop().copy(p).sub(c['pos']).sub(c['offset']);  
        var radiusSq = c['r'] * c['r'];  
        var distanceSq = differenceV.len2();  
        T_VECTORS.push(differenceV);  
        return distanceSq <= radiusSq;
    }
    //=================================================
    function pointInPolygon(p, poly) {  
        TEST_POINT['pos'].copy(p);  
        T_RESPONSE.clear();  
        var result = SATtestPolygonPolygon(TEST_POINT, poly, T_RESPONSE);  
        if (result) {    
            result = T_RESPONSE['aInB'];  
        }  
        return result;
    }
    //=================================================
    function SATtestCircleCircle(a, b, response) {  
        var differenceV = T_VECTORS.pop().copy(b['pos']).add(b['offset']).sub(a['pos']).sub(a['offset']);  
        var totalRadius = a['r'] + b['r'];  
        var totalRadiusSq = totalRadius * totalRadius;  
        var distanceSq = differenceV.len2();  
        if (distanceSq > totalRadiusSq) {    
            T_VECTORS.push(differenceV);    
            return false;  
        }  
        if (response) {    
            var dist = Math.sqrt(distanceSq);    
            response['a'] = a;    
            response['b'] = b;    
            response['overlap'] = totalRadius - dist;    
            response['overlapN'].copy(differenceV.normalize());    
            response['overlapV'].copy(differenceV).scale(response['overlap']);    
            response['aInB'] = a['r'] <= b['r'] && dist <= b['r'] - a['r'];    
            response['bInA'] = b['r'] <= a['r'] && dist <= a['r'] - b['r'];  
        }  
        T_VECTORS.push(differenceV);  
        return true;
    }
    //=================================================
    function SATtestPolygonCircle(polygon, circle, response) {  
        var circlePos = T_VECTORS.pop().copy(circle['pos']).add(circle['offset']).sub(polygon['pos']);  
        var radius = circle['r'];  
        var radius2 = radius * radius;  
        var points = polygon['calcPoints'];  
        var len = points.length;  
        var edge = T_VECTORS.pop();  
        var point = T_VECTORS.pop();  
        for (var i = 0; i < len; i++) {    
            var next = i === len - 1 ? 0 : i + 1;    
            var prev = i === 0 ? len - 1 : i - 1;    
            var overlap = 0;    var overlapN = null;    
            edge.copy(polygon['edges'][i]);    
            point.copy(circlePos).sub(points[i]);    
            if (response && point.len2() > radius2) {      
                response['aInB'] = false;    
            }    
            var region = voronoiRegion(edge, point);    
            if (region === LEFT_VORONOI_REGION) {      
                edge.copy(polygon['edges'][prev]);      
                var point2 = T_VECTORS.pop().copy(circlePos).sub(points[prev]);      
                region = voronoiRegion(edge, point2);      
                if (region === RIGHT_VORONOI_REGION) {        
                    var dist = point.len();        
                    if (dist > radius) {          
                        T_VECTORS.push(circlePos);          
                        T_VECTORS.push(edge);          
                        T_VECTORS.push(point);          
                        T_VECTORS.push(point2);          
                        return false;        
                    } else if (response) {          
                        response['bInA'] = false;          
                        overlapN = point.normalize();          
                        overlap = radius - dist;        
                    }      
                }      
                T_VECTORS.push(point2);    
            } else if (region === RIGHT_VORONOI_REGION) {      
                edge.copy(polygon['edges'][next]);      
                point.copy(circlePos).sub(points[next]);      
                region = voronoiRegion(edge, point);      
                if (region === LEFT_VORONOI_REGION) {        
                    var dist = point.len();        
                    if (dist > radius) {          
                        T_VECTORS.push(circlePos);          
                        T_VECTORS.push(edge);          
                        T_VECTORS.push(point);          
                        return false;        
                    } else if (response) {          
                        response['bInA'] = false;          
                        overlapN = point.normalize();          
                        overlap = radius - dist;        
                    }      
                }    
            } else {      
                var normal = edge.perp().normalize();      
                var dist = point.dot(normal);      
                var distAbs = Math.abs(dist);      
                if (dist > 0 && distAbs > radius) {        
                    T_VECTORS.push(circlePos);        
                    T_VECTORS.push(normal);        
                    T_VECTORS.push(point);        
                    return false;      
                } else if (response) {        
                    overlapN = normal;        
                    overlap = radius - dist;        
                    if (dist >= 0 || overlap < 2 * radius) {          
                        response['bInA'] = false;        
                    }      
                }    
            }    
            if (overlapN && response && Math.abs(overlap) < Math.abs(response['overlap'])) {      
                response['overlap'] = overlap;      
                response['overlapN'].copy(overlapN);    
            }  
        }  
        if (response) {    
            response['a'] = polygon;    
            response['b'] = circle;    
            response['overlapV'].copy(response['overlapN']).scale(response['overlap']);  
        }
        T_VECTORS.push(circlePos);  
        T_VECTORS.push(edge);  
        T_VECTORS.push(point);  
        return true;
    }
    //=================================================
    function SATtestCirclePolygon(circle, polygon, response) {  
        var result = SATtestPolygonCircle(polygon, circle, response);  
        if (result && response) {    
            var a = response['a'];    
            var aInB = response['aInB'];    
            response['overlapN'].reverse();    
            response['overlapV'].reverse();    
            response['a'] = response['b'];    
            response['b'] = a;    
            response['aInB'] = response['bInA'];    
            response['bInA'] = aInB;  
        }  
        return result;
    }
    //=================================================
    function SATtestPolygonPolygon(a, b, response) {  
        var aPoints = a['calcPoints'];  
        var aLen = aPoints.length;  
        var bPoints = b['calcPoints'];  
        var bLen = bPoints.length;  
        for (var i = 0; i < aLen; i++) {    
            if (isSeparatingAxis(a['pos'], b['pos'], aPoints, bPoints, a['normals'][i], response)) {      
                return false;    
            }  
        }  
        for (var i = 0; i < bLen; i++) {    
            if (isSeparatingAxis(a['pos'], b['pos'], aPoints, bPoints, b['normals'][i], response)) {      
                return false;    
            }  
        }  
        if (response) {    
            response['a'] = a;    
            response['b'] = b;    
            response['overlapV'].copy(response['overlapN']).scale(response['overlap']);  
        }  
        return true;
    }
    //=================================================
}
if (true) {
    QJ.SAT = QJ.SAT || {};
    QJ.SAT.box = function(x,y,boxType){
    let body = null;
    if (boxType[0]==0) {
        body = new SATCircle(new SATVector(x,y),boxType[1]);
        body.type = 0;
        body.dia = boxType[1];
    } else if (boxType[0]==1) {
        body = new SATPolygon(
            new SATVector(x,y), [
            new SATVector(-boxType[1]/2,-boxType[2]/2),
            new SATVector(+boxType[1]/2,-boxType[2]/2),
            new SATVector(+boxType[1]/2,+boxType[2]/2),
            new SATVector(-boxType[1]/2,+boxType[2]/2)
        ]);
        body.type = 1;
        body.w = boxType[1];
        body.h = boxType[2];
        body.dl = Math.atan(body.w/body.h);//Diagonal line angle
        body.dia = Math.sqrt(body.w*body.w+body.h*body.h)/2;//Diagonal length
    }
    return body;
    };
    QJ.SAT.sat = new SATResponse();
    QJ.SAT.judge = function(bodyA,bodyB){
    QJ.SAT.sat.clear();
    if (bodyA.type==0&&bodyB.type==0) {
        QJ.SAT.sat.result = SATtestCircleCircle(bodyA,bodyB,QJ.SAT.sat);
    } else if (bodyA.type==1&&bodyB.type==1) {
        QJ.SAT.sat.result = SATtestPolygonPolygon(bodyA,bodyB,QJ.SAT.sat);
    } else if (bodyA.type==1&&bodyB.type==0) {
        QJ.SAT.sat.result = SATtestPolygonCircle(bodyA,bodyB,QJ.SAT.sat);
    }  else if (bodyA.type==0&&bodyB.type==1) {
        QJ.SAT.sat.result = SATtestCirclePolygon(bodyA,bodyB,QJ.SAT.sat);
    } 
    return QJ.SAT.sat;
    };
    QJ.SAT.setPostion = function(body,x,y){
    body.pos.x = x;
    body.pos.y = y;
    };
}
//=============================================================================
//Dramtic effect   |direction effect    /fade effect    %circle effect
//=============================================================================
function DEFrameQJ() {
    this.initialize.apply(this, arguments);
}
DEFrameQJ.prototype.initialize = function(name,orginData,dataType,noFadeCopy) {
    noFadeCopy = noFadeCopy||false;
    this.i = dataType;//0-number 1-text 2-degree
    this.n = name;
    this.d = {};
    this.m = 0;
    this.t = 0;
    this.rt = 0;
    this.isMode = true;
    if (typeof orginData == "string"&&orginData.includes("~")) {
        let data = orginData.split("~"),num=0,fadeT=0,last;
        for (let i=0,il=data.length,detail;i<il;i++) {
            if (data[i].includes("|")) {
                detail = data[i].split("|");
                if (dataType==0) num = Number(detail[1]);
                else if (dataType==1) num = detail[1];
                else if (dataType==2) num = Number(detail[1])*Math.PI/180;
                this.d[this.m] = num;
                if (noFadeCopy) {
                    for (let i=this.m,ll=Number(detail[0]);i<ll;i++) {
                        this.d[i] = num;
                    }
                }
                this.m+=Number(detail[0]);
                this.d[this.m] = num;
            } else if (data[i].includes("/")) {
                detail = data[i].split("/");
                fadeT = Number(detail[0]);
                if (dataType==0) {
                    num = Number(detail[1]);
                    last = this.d[this.m];
                    for (let j=1;j<=fadeT;j++) {
                        this.d[this.m+j] = last+(num-last)*j/fadeT;
                    }
                    this.m+=fadeT;
                    this.d[this.m] = num;
                } else if (dataType==1) {
                    num = QJ.BL.hexToRgb(detail[1]);
                    last = QJ.BL.hexToRgb(this.d[this.m])//[0,{r:0,g:0,b:0}];
                    for (let j=1;j<=fadeT;j++) {
                        this.d[this.m+j] = QJ.BL.rgbToHex({
                            r:Math.floor(last.r+(num.r-last.r)*j/fadeT),
                            g:Math.floor(last.g+(num.g-last.g)*j/fadeT),
                            b:Math.floor(last.b+(num.b-last.b)*j/fadeT)
                        });
                    }
                    this.m+=fadeT;
                    this.d[this.m] = detail[1];
                } else if (dataType==2) {
                    num = Number(detail[1])*Math.PI/180;
                    last = this.d[this.m];
                    for (let j=1;j<=fadeT;j++) {
                        this.d[this.m+j] = last+(num-last)*j/fadeT;
                    }
                    this.m+=fadeT;
                    this.d[this.m] = num;
                }
            } else if (data[i].includes("%")) {
                detail = data[i].split("%");
                fadeT = Number(detail[0]);
                if (dataType==0) {
                    num = Number(detail[1]);
                    last = this.d[this.m];
                    for (let j=1;j<=fadeT;j++) {
                        this.d[this.m+j] = num-(num-last)*Math.sqrt(1-Math.pow(j/fadeT,2));
                    }
                    this.m+=fadeT;
                    this.d[this.m] = num;
                } else if (dataType==1) {
                    num = QJ.BL.hexToRgb(detail[1]);
                    last = QJ.BL.hexToRgb(this.d[this.m])//[0,{r:0,g:0,b:0}];
                    for (let j=1,xs;j<=fadeT;j++) {
                        xs = Math.sqrt(1-Math.pow(j/fadeT,2));
                        this.d[this.m+j] = QJ.BL.rgbToHex({
                            r:Math.floor(num.r-(num.r-last.r)*xs),
                            g:Math.floor(num.g-(num.g-last.g)*xs),
                            b:Math.floor(num.b-(num.b-last.b)*xs)
                        });
                    }
                    this.m+=fadeT;
                    this.d[this.m] = detail[1];
                } else if (dataType==2) {
                    num = Number(detail[1])*Math.PI/180;
                    last = this.d[this.m];
                    for (let j=1;j<=fadeT;j++) {
                        this.d[this.m+j] = num-(num-last)*Math.sqrt(1-Math.pow(j/fadeT,2));
                    }
                    this.m+=fadeT;
                    this.d[this.m] = num;
                }
            }
        }
    } else {
        this.isMode = false;
        let num;
        if (dataType==0) num = Number(orginData);
        else if (dataType==1) num = orginData;
        else if (dataType==2) num = Number(orginData)*Math.PI/180;
        this.d[this.m] = num;
    }
};
DEFrameQJ.prototype.get = function() {
    if (this.t>this.m) this.t = 0;
    if (this.d[this.t]!=undefined) this.rt = this.t;
    this.t++;
    return this.d[this.rt];
};
DEFrameQJ.prototype.getOnly = function() {
    return this.d[this.rt];
};
DEFrameQJ.prototype.getTar = function(i) {
    return this.d[i>this.m?0:i];
};
//=============================================================================
//
//=============================================================================
QJ.callEvent = function(value,listValue){
    if ($gameMap.event(value)) {
        $gameMap.event(value).steupCEQJ(listValue);
    }
};
//============================================================
function Game_InterpreterCEQJ() {
    this.initialize.apply(this, arguments);
}
Game_InterpreterCEQJ.prototype = Object.create(Game_Interpreter.prototype);
Game_InterpreterCEQJ.prototype.constructor = Game_InterpreterCEQJ;
Game_InterpreterCEQJ.prototype.initialize = function(pageIndex) {
    Game_Interpreter.prototype.initialize.call(this,0);
    this.pageIndex=pageIndex;
};
Game_InterpreterCEQJ.prototype.terminate = function() {
    $gameMap.event(this.eventId())._commonEventQJ.splice($gameMap.event(this.eventId())._commonEventQJ.indexOf(this),1);
    Game_Interpreter.prototype.terminate.call(this);
};
//============================================================
QJ.callCommonEvent = function(listvalue,eid,bp,bulletCanUseData){
    $gameMap.steupCEQJ(listvalue,eid,bp,bulletCanUseData);
};
//============================================================
function Game_InterpreterCEQJX() {
    this.initialize.apply(this, arguments);
}
Game_InterpreterCEQJX.prototype = Object.create(Game_Interpreter.prototype);
Game_InterpreterCEQJX.prototype.constructor = Game_InterpreterCEQJX;
Game_InterpreterCEQJX.prototype.initialize = function(id) {
    Game_Interpreter.prototype.initialize.call(this,0);
    this.commonEventId=id;
};
Game_InterpreterCEQJX.prototype.terminate = function() {
    $gameMap._commonEventQJ.splice($gameMap._commonEventQJ.indexOf(this),1);
    Game_Interpreter.prototype.terminate.call(this);
};
//=============================================================================
//
//=============================================================================
(($) => {
//=============================================================================
//
//=============================================================================
$.Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand;
Game_Interpreter.prototype.executeCommand = function() {
    QJ.Pointer=this;
    return $.Game_Interpreter_executeCommand.apply(this,arguments);
};
//=============================================================================
//Key
//=============================================================================
QJ.orginKeyCodes = {
    8: 'backspace',9: 'tab',12: 'clear',13: 'ok',16: 'shift',17: 'control',18: 'alt',19: 'pause',20: 'caps lock', 27: 'escape',           32: 'ok',         33: 'pageup',        34: 'pagedown',      35: 'end',36: 'home',
    37: 'left',           38: 'up',             39: 'right',          40: 'down',           
    44: 'print screen',45: 'escape',         46: 'del',
    48: 'num 0',49: 'num 1',50: 'num 2',51: 'num 3',52: 'num 4',53: 'num 5',54: 'num 6',55: 'num 7',56: 'num 8',57: 'num 9',
    65: 'A',66: 'B',67: 'C',68: 'D',69: 'E',70: 'F',71: 'G',72: 'H',73: 'I',74: 'J',75: 'K',76: 'L',77: 'M',78: 'N',79: 'O',80: 'P',81: 'Q',
    82: 'R',83: 'S',84: 'T',85: 'U',86: 'V',87: 'W',       88: 'X',       89: 'Y',90: 'Z',       
    91: 'L Win',92: 'R Win',93: 'select',96: 'escape',     
    97: 'numpad 1',     98: 'numpad 2',     99: 'numpad 3',     100: 'numpad 4',    101: 'numpad 5',     102: 'numpad 6',     103: 'numpad 7',     104: 'numpad 8',      105: 'numpad 9',     
    106: 'numpad *',107: 'numpad +',109: 'numpad -',110: 'numpad .',111: 'numpad /',
    112: 'F1',113: 'F2',114: 'F3',115: 'F4',116: 'F5',117: 'F6',118: 'F7',119: 'F8',120: 'F9',121: 'F10',122: 'F11',123: 'F12',
    144: 'num lock',145: 'scroll lock',
    186: ';',187: '=',188: ',',189: '-',190: '.',191: '/',192: '`',219: '[',220: '\\',221: ']',222: "'"
};
for (let i in QJ.orginKeyCodes) {
    //in order not to conflict.[为了防止冲突]
    if (!Input.keyMapper[i]) {
        Input.keyMapper[i] = QJ.orginKeyCodes[i];
    }
}
//=============================================================================
//
//=============================================================================
QJ.randomColor = function(start,length) {
    return QJ.rgbToHex({
        r:start+Math.floor(Math.random()*length),
        g:start+Math.floor(Math.random()*length),
        b:start+Math.floor(Math.random()*length)});
}
QJ.colorGrad = function(bitmap,content,x,y,w,h,ro) {
    if (!content.includes("|")) return content;
    const list=content.split("~");
    const colorNum = list.length;
    const grad = bitmap._context.createLinearGradient(x,y,x+w*Math.sin(ro),y-h*Math.cos(ro));
    for(let i=0; i<colorNum; i++) {
        let detail = list[i].split("|");
        grad.addColorStop(detail[0],detail[1]);
    }
    return grad;
}
QJ.hexToRgb = function (hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {r: parseInt(result[1],16),g: parseInt(result[2], 16),b: parseInt(result[3], 16)};
}
QJ.rgbToHex = function (rgb) {
    let r=rgb.r.toString(16),g=rgb.g.toString(16),b=rgb.b.toString(16);
    return "#"+(r.length==1?("0"+r):r)+(g.length==1?("0"+g):g)+(b.length==1?("0"+b):b);
}
QJ.calculateAngleByTwoPoint=function(x,y,ex,ey){
    let ro;
    if (ex>x&&ey<y)  ro=(-Math.atan((x-ex)/(y-ey)));
    if (ex>x&&ey>y)  ro=(Math.PI-Math.atan((x-ex)/(y-ey)));
    if (ex<x&&ey>y)  ro=(Math.PI-Math.atan((x-ex)/(y-ey)));
    if (ex<x&&ey<y)  ro=(2*Math.PI-Math.atan((x-ex)/(y-ey)));
    if (ex==x&&ey>y) ro=Math.PI;
    if (ex==x&&ey<y) ro=0;
    if (ex>x&&ey==y) ro=Math.PI/2;
    if (ex<x&&ey==y) ro=Math.PI*3/2;
    if (ex==x&&ey==y)ro=null;
    return ro;
};
QJ.calculateAngleByDirection=function(direction){
    if (direction==1) return Math.PI*5/4;//左下
    if (direction==2) return Math.PI;
    if (direction==3) return Math.PI*3/4;//右下
    if (direction==4) return Math.PI*3/2;
    if (direction==6) return Math.PI/2;
    if (direction==7) return Math.PI*7/4;//左上
    if (direction==8) return 0;
    if (direction==9) return Math.PI/4;//右上
    return 0;
};
QJ.calculateAnnotation = function(event) {
    let page=null,content="";
    try{
        page=event.page();
    } catch(e) {
        page=null;
    }
    if (page) {
        if (page.list[0].code === 108) {
            let i=0;
            while (page.list[i].code === 408 || page.list[i].code === 108) {
                content=content + page.list[i].parameters[0];
                i++;
            }
        }
    }
    return content;
};
//=============================================================================
//
//=============================================================================
$.Game_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function(mapId, eventId) {
    this._commonEventQJ = new Array();
    $.Game_Event_initialize.apply(this,arguments);
};
Game_Event.prototype.steupCEQJ = function(value) {
    if (!!this.event().pages[value-1]) {
        this._forceInterpreterQB.push(new Game_InterpreterCEQJ(value-1));
    }
};
$.Game_Event_updateParallel = Game_Event.prototype.updateParallel;
Game_Event.prototype.updateParallel = function() {
    $.Game_Event_updateParallel.apply(this,arguments);
    for (let i of this._commonEventQJ) {
        if (!i) continue;
        if (!i.isRunning()) {
            i.setup(this.event().pages[i.pageIndex].list,this.eventId());
        }
        i.update();
    }
};
//=============================================================================
//
//=============================================================================
$.Game_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
    this._commonEventQJ = new Array();
    $.Game_Map_initialize.apply(this,arguments);
};
Game_Map.prototype.steupCEQJ = function(value,eid,bp,bulletCanUseData) {
    if (!!$dataCommonEvents[value]) {
        this._commonEventQJ.push(new Game_InterpreterCEQJX(value,eid,bp,bulletCanUseData));
    }
};
$.Game_Map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function(sceneActive) {
    $.Game_Map_update.apply(this,arguments);
    for (let i of this._commonEventQJ) {
        if (!i) continue;
        if (!i.isRunning()&&i.EID&&i.EID>0) {
            i.setup($dataCommonEvents[i.commonEventId].list,i.EID);
        }
        i.update();
    }
}
//=============================================================================
//
//=============================================================================
Spriteset_Map.prototype.clearAllButtle = function() {
    this._1ContainerQJ.removeChildren();//below parallax/map/event/picture
    this._2ContainerQJ.removeChildren();//below map/event/picture
    this._3ContainerQJ.removeChildren();//below event/picture
    this._4ContainerQJ.removeChildren();//below picture
    this._5ContainerQJ.removeChildren();//above all
};
$.Spriteset_Map_createParallax = Spriteset_Map.prototype.createParallax;
Spriteset_Map.prototype.createParallax = function() {
    this._1ContainerQJ = new Sprite_ContainerQJ();
    this._baseSprite.addChild(this._1ContainerQJ);
    $.Spriteset_Map_createParallax.call(this);
    this._2ContainerQJ = new Sprite_ContainerQJ();
    this._baseSprite.addChild(this._2ContainerQJ);
};
$.Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function() {
    this._3ContainerQJ = new Sprite_ContainerQJ();
    this._3ContainerQJ.z = -999999999;
    this._tilemap.addChild(this._3ContainerQJ);
    $.Spriteset_Map_createCharacters.call(this);
    this._4ContainerQJ = new Sprite_ContainerQJ();
    this.addChild(this._4ContainerQJ);
};
$.Spriteset_Base_createTimer = Spriteset_Base.prototype.createTimer;
Spriteset_Base.prototype.createTimer = function() {
    $.Spriteset_Base_createTimer.call(this);
    this._5ContainerQJ = new Sprite_ContainerQJ();
    this.addChild(this._5ContainerQJ);
};
//=============================================================================
//Sprite_ContainerQJ
//=============================================================================
function Sprite_ContainerQJ() {
    this.initialize.apply(this, arguments);
};
Sprite_ContainerQJ.prototype = Object.create(PIXI.Container.prototype);
Sprite_ContainerQJ.prototype.constructor = Sprite_ContainerQJ;
Sprite_ContainerQJ.prototype.initialize = function() {
    PIXI.Container.call(this);
}
Sprite_ContainerQJ.prototype.update = function() {
    if (this.AIBitmap) this.AIBitmap.clear();
    this.children.forEach((child)=>{
        if (child.isEffectLayer) {

        } else {
            if (child.update) {
                child.update();
            }
            if (child.updateLayerEffect) {
                child.updateLayerEffect();
            }
        }
    });
};
/*Sprite_ContainerQJ.prototype.drawAfterImage = function(x,y,r,c,o,w,h) {
    if (!this.AIBitmap) {
        this.AIBitmap = new Bitmap(Graphics.width+QJ.tileSize*2,Graphics.height+QJ.tileSize*2);
        let spriteAI = new Sprite(this.AIBitmap);
        spriteAI.isEffectLayer = true;
        spriteAI.x = -QJ.tileSize;
        spriteAI.y = -QJ.tileSize;
        this.addChild(spriteAI);
    }
    let ctx = this.AIBitmap._context;
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(r);
    ctx.fillStyle = c;
    ctx.globalAlpha = o;
    ctx.fillRect(-w/2,0,w,h);
    ctx.restore();
    this.AIBitmap._setDirty();
};*/
//=============================================================================
//Sprite_QJPContainer
//=============================================================================
function Sprite_ContainerParticleQJ() {
    this.initialize.apply(this, arguments);
};
Sprite_ContainerParticleQJ.prototype = Object.create(PIXI.ParticleContainer.prototype);
Sprite_ContainerParticleQJ.prototype.constructor = Sprite_ContainerParticleQJ;
Sprite_ContainerParticleQJ.prototype.initialize = function() {
    PIXI.ParticleContainer.call(this,10000,{
        rotation:true,
        scale:true,
        alpha:true,
        uvs:true
    });
};
Sprite_ContainerParticleQJ.prototype.destroy = function() {
    if (this.parent) this.parent.removeChild(this);
    PIXI.ParticleContainer.prototype.destroy.call(this,{
        children: true
    });
};
/*Sprite_ContainerParticleQJ.prototype.update = function() {
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
};*/
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================
})(QJ.reWrite);
//=============================================================================
//
//=============================================================================