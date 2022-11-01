//=============================================================================
// RPG Maker MZ - QJ-MapProjectileMZ.js
//=============================================================================
/*:
 * @target MV MZ
 * @plugindesc [Projectile In Map MZ][V2.3]
 * @author Qiu Jiu
 * @base QJ-CoreMZ
 *
 * @help QJ-MapProjectileMZ.js
* ======================================================
 * ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ
 * ======================================================
 * Ⅰ.URL:
 *   libray:   https://github.com/QiuJiu-9/RM-World
 *   wiki:     https://qiujiu-9.github.io
 *   itch.io:  https://qiujiu.itch.io/
 *   Project1: https://rpg.blue/home.php?mod=space&uid=2709153
 *   WeiXin:   qiujiuqihongyi
 *   QQ:       975866141
 * ======================================================
 * Ⅱ.Base Note
 *   The detail way of use can be found in https://qiujiu-9.github.io
 * ======================================================
 * Ⅲ.Terms of use
 *    This plugin is not free for commercail use.
 *    This plugin is free for non-commercail use.
 *    You need to by this on itch.io or pay me with Paypal.
 * ======================================================
 *
* @param ======player======
 * @default player setting
 *
 * @param playerInitBox
 * @type text
 * @text player box
 * @desc ['R',36,36] or ['C',18] recommend
 * @default ['C',18]
 * @parent ======player======
 *
 * @param playerInitBoxOffsetX
 * @type text
 * @text player box offset x
 * @desc player box offset x
 * @default 0
 * @parent ======player======
 *
 * @param playerInitBoxOffsetY
 * @type text
 * @text player box offset y
 * @desc player box offset y
 * @default 0
 * @parent ======player======
 *
* @param ======event======
 * @default event setting
 *
 * @param eventInitBox
 * @type text
 * @text event box
 * @desc ['R',36,36] or ['C',18] recommend
 * @default ['C',18]
 * @parent ======event======
 *
 * @param eventInitBoxOffsetX
 * @type text
 * @text event box offset x
 * @desc event box offset x
 * @default 0
 * @parent ======event======
 *
 * @param eventInitBoxOffsetY
 * @type text
 * @text event box offset y
 * @desc event box offset y
 * @default 0
 * @parent ======event======
 *
* @param ======chaos======
 * @default chaos
 *
 * @param forBidDestination
 * @type boolean
 * @text cancel click to move
 * @desc cancel the function of clicking the map to move
 * @default true
 * @parent ======chaos======
 *
 * @param offsetGY
 * @type boolean
 * @text box auto offset
 * @desc box offset 6 pixel with character
 * @default false
 * @parent ======chaos======
 *
 * @param canShowBox
 * @type boolean
 * @text can show box
 * @desc can show box
 * @default false
 * @parent ======chaos======
 *
 * @param showBox
 * @type boolean
 * @text show box by default
 * @desc show box by default
 * @default false
 * @parent ======chaos======
 *
 * @param editKey
 * @type select
 * @text key to show/hide box
 * @desc key to show/hide box
 * @default F7
 * @option F1
 * @option F6
 * @option F7
 * @option F8
 * @option F9
 * @option F10
 * @parent ======chaos======
 *
 * @param tileSize
 * @type number
 * @text the size of tile
 * @desc the size of tile
 * @default 48
 * @parent ======chaos======
 *
 * @param ======updateAuto======
 * @default
 *
 * @param synAuto
 * @type boolean
 * @text updateAuto
 * @desc updateAuto
 * @default false
 * @parent ======updateAuto======
 *
 * @param directSyn
 * @type boolean
 * @text update directly
 * @on forceUpdate
 * @off justMessage
 * @desc if update the plugin file auto directly
 * @default true
 * @parent ======updateAuto======
 *
 *
*/
/*:zh
 * @target MV MZ
 * @plugindesc [在地图上显示弹幕][V2.3]
 * @author 仇九
 * @base QJ-CoreMZ
 *
 * @help QJ-MapProjectileMZ.js
* ======================================================
 * ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ
 * ======================================================
 * Ⅰ.链接:
 *   libray:   https://github.com/QiuJiu-9/RM-World
 *   wiki:     https://qiujiu-9.github.io
 *   itch.io:  https://qiujiu.itch.io/
 *   Project1: https://rpg.blue/home.php?mod=space&uid=2709153
 *   WeiXin:   qiujiuqihongyi
 *   QQ:       975866141
 * ======================================================
 * Ⅱ.基础说明
 *    详细的使用方式可在   https://qiujiu-9.github.io    中查看
 * ======================================================
 * Ⅲ.使用条例
 *    您可以免费将此插件用于非商业用途，但不可二次修改，发布。
 *    若你需要将此次插件用于商业用途，请购买这个插件。
 *    您需要购买这个插件在itch.io，paypal或者微信，支付宝上。
 * ======================================================
 *
* @param ======player======
 * @default 玩家初始设置
 *
 * @param playerInitBox
 * @type text
 * @text 玩家预设刚体
 * @desc 建议写['R',36,36]或者['C',18]
 * @default ['C',18]
 * @parent ======player======
 *
 * @param playerInitBoxOffsetX
 * @type text
 * @text 玩家预设刚体X偏移
 * @desc 玩家预设刚体X偏移
 * @default 0
 * @parent ======player======
 *
 * @param playerInitBoxOffsetY
 * @type text
 * @text 玩家预设刚体Y偏移
 * @desc 玩家预设刚体Y偏移
 * @default 0
 * @parent ======player======
 *
* @param ======event======
 * @default 事件默认设置
 *
 * @param eventInitBox
 * @type text
 * @text 事件默认刚体
 * @desc 建议写['R',36,36]或者['C',18]
 * @default ['C',18]
 * @parent ======event======
 *
 * @param eventInitBoxOffsetX
 * @type text
 * @text 事件预设刚体X偏移
 * @desc 事件预设刚体X偏移
 * @default 0
 * @parent ======event======
 *
 * @param eventInitBoxOffsetY
 * @type text
 * @text 事件预设刚体Y偏移
 * @desc 事件预设刚体Y偏移
 * @default 0
 * @parent ======event======
 *
* @param ======chaos======
 * @default 杂项
 *
 * @param forBidDestination
 * @type boolean
 * @text 取消掉点击移动
 * @desc 初始时是否取消掉点击移动，注意，取消掉后也无法再直接与事件进行互动，但可以用指令恢复。
 * @default true
 * @parent ======chaos======
 *
 * @param offsetGY
 * @type boolean
 * @text 行走图自动上浮
 * @desc 是否让碰撞体随着角色行走图向上浮动6个像素。
 * @default false
 * @parent ======chaos======
 *
 * @param canShowBox
 * @type boolean
 * @text 是否可以显示碰撞体
 * @desc 是否可以显示碰撞体。在游戏正式发布时可以关闭此选项。
 * @default false
 * @parent ======chaos======
 *
 * @param showBox
 * @type boolean
 * @text 是否默认显示碰撞体
 * @desc 是否默认显示碰撞体
 * @default false
 * @parent ======chaos======
 *
 * @param editKey
 * @type select
 * @text 碰撞体显示按键
 * @desc 碰撞体显示按键
 * @default F7
 * @option F1
 * @option F6
 * @option F7
 * @option F8
 * @option F9
 * @option F10
 * @parent ======chaos======
 *
 * @param tileSize
 * @type number
 * @text 图块大小
 * @desc 图块大小
 * @default 48
 * @parent ======chaos======
 *
 * @param ======自动更新======
 * @default
 *
 * @param synAuto
 * @type boolean
 * @text 自动更新
 * @desc 自动更新，在制作工程时建议开启，在正式发布游戏时建议关闭。
 * @default false
 * @parent ======自动更新======
 *
 * @param directSyn
 * @type boolean
 * @text 主动更新
 * @on 直接自主更新
 * @off 单纯提示更新
 * @desc 可以选择是直接自主更新，还是仅仅提示您需要更新
 * @default true
 * @parent ======自动更新======
 *
*/
//=============================================================================
//Traditional Habit.
//=============================================================================
var QJ = QJ || {};
QJ.MPMZ = QJ.MPMZ || {reWrite:{}};
var Imported = Imported || {};
Imported.QJMapProjectile = true;
//================================================
QJ.MPMZ.sprite = null;
//The handling code for circular references in MZ has been removed.
//So the data needed to save can`t be transmitted to other data needed to save.
//
//When I want to save a bundle of codes to execute them after a while, 
//I can`t directly save codes as a function (Anonymous functions or not) because 
//they can`t be encoded and decoded.
//I can stringfy them or ......
//save them in a list and save a index, then I can use index to call them in list......
QJ.MPMZ.saveFunction = [

];
QJ.MPMZ.addSaveFunction = function(fun) {
    QJ.MPMZ.saveFunction.push(fun);
    return ['saveFunction',QJ.MPMZ.saveFunction.length-1];
}
QJ.MPMZ.getSaveFunction = function(data) {
    if (typeof data == 'object'&&data[0]=='saveFunction') {
        return QJ.MPMZ.saveFunction[data[1]];
    } else {
        return null;
    }
}
//=============================================================================
//
//=============================================================================
function Game_QJBulletMZ() {
    this.initialize.apply(this, arguments);
}
function Sprite_QJBulletMZ() {
    this.initialize.apply(this, arguments);
};
function Game_QJLaserMZ() {
    this.initialize.apply(this, arguments);
}
function Sprite_QJLaserMZ() {
    this.initialize.apply(this, arguments);
};
function Sprite_ProjectileContainerQJMZ() {
    this.initialize.apply(this, arguments);
};
function Sprite_ParticleContainerQJMZ() {
    this.initialize.apply(this, arguments);
};
function Sprite_QJParticleMZ() {
    this.initialize.apply(this, arguments);
};
//=============================================================================
//
//=============================================================================
(($) => {
//=============================================================================
//
//=============================================================================
const pluginName = "QJ-MapProjectileMZ";
const parameters = PluginManager.parameters(pluginName);
const offsetGY = eval(parameters.offsetGY);
const editKey = String(parameters.editKey);
//=============================================================================
//
//=============================================================================
let tileSize = Number(parameters.tileSize);
let isMV = QJ.MPMZ.isMV = Utils.RPGMAKER_NAME === 'MV';
//=============================================================================
//MV按键扩展适配
//=============================================================================
if (isMV) {
    let orginList = { 112: 'F1',117: 'F6',118: 'F7',119: 'F8',120: 'F9',121: 'F10'};
    for (let i in orginList) {
        if (orginList[i] === editKey) {
            Input.keyMapper[i] = orginList[i];
            break;
        }
    }
}
//=============================================================================
//
//=============================================================================
const synAuto = eval(parameters.synAuto);
const directSyn = eval(parameters.directSyn);
//=============================================================================
//
//=============================================================================
const lastUpdateDataForSyn = [2022,11,1,22,0];
let updateDataForCheck = (xhr)=>{
    let canUpdate = false;
    try{
        let jsonData = JSON.parse(xhr.responseText);
        let nowUpdateData = jsonData.lastUpdateDataQJProjectile;
        //console.log(lastUpdateDataForSyn,nowUpdateData);
        for (let i=0;i<5;i++) {
            if (nowUpdateData[i]>lastUpdateDataForSyn[i]) {
                canUpdate = true;
                break;
            } else if (nowUpdateData[i]<lastUpdateDataForSyn[i]) {
                break;
            }
        }
    } catch(e) {
        //更新数据有
        canUpdate = false;
    }
    return canUpdate;
};
let updatePluginData = ()=>{
    if (directSyn) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://raw.githubusercontent.com/QiuJiu-9/ProjectilePluginSyn/main/ProjectilePluginSyn/QJ-MapProjectileMZ.js", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 0) {
                    if (xhr.responseText.length>0) {
                        let fs = require("fs");
                        fs.writeFileSync("js/plugins/QJ-MapProjectileMZ.js",xhr.responseText,()=>{
                            throw new Error("QJ-MapProjectileMZ.js自动更新出错，请关闭QJ-MapProjectileMZ.js的自动更新功能。");
                        });
                        alert("QJ-MapProjectileMZ.js已更新完成，请在插件管理器中重新打开插件来刷新插件参数。");
                        window.close();
                    }
                }
                xhr.onreadystatechange = ()=>{};
                xhr = null;
            } else if (xhr.readyState == 404) {
                xhr.onreadystatechange = ()=>{};
                xhr = null;
            }
        }
        xhr.send(null);
    } else {
        alert("QJ-MapProjectileMZ.js可更新。");
    }
};
//=============================================================================
//
//=============================================================================
if (synAuto && !!nw) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/QiuJiu-9/ProjectilePluginSyn/main/ProjectilePluginSyn/versionMessage.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 0) {
                if (updateDataForCheck(xhr)) {
                    updatePluginData();
                }
            } else {
                console.warn("QJ-MapProjectileMZ.js开启了自动更新，但是无法连接到更新地址。");
            }
            xhr.onreadystatechange = ()=>{};
            xhr = null;
        } else if (xhr.readyState == 404) {
            console.warn("QJ-MapProjectileMZ.js开启了自动更新，但是无法连接到更新地址。");
            xhr.onreadystatechange = ()=>{};
            xhr = null;
        }
    }
    xhr.send(null);
}
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================
QJ.MPMZ.text1 = [
'The projectile attribute`s value error.'
];
QJ.MPMZ.text2 = [
'子弹的属性值错误.'
];
QJ.MPMZ.text = QJ.MPMZ.text2;
QJ.MPMZ.error = function(index,value) {
    //throw new Error(QJ.MPMZ.text[index]+'相关值为：\n'+value);
    console.error(QJ.MPMZ.text[index]+'相关值为：\n'+value);
}
//=============================================================================
//
//=============================================================================
QJ.MPMZ.ClearAll = function() {
    $gameMap.initProjectileDataQJ();
    if (!SceneManager._scene) return;
    if (!SceneManager._scene._spriteset) return;
    if (!SceneManager._scene._spriteset.clearAllButtle) return;
    SceneManager._scene._spriteset.clearAllButtle();
}
QJ.MPMZ.getGroupIdInRange = function(name,ox,oy,range) {
    let eventData,ax,ay;
    range=range*range;
    ox+=$gameMap.displayX()*tileSize;
    oy+=$gameMap.displayY()*tileSize;
    return $gameMap._groupListQJ[name].filter((event)=>{
        if (!event) return false;
        eventData = $gameMap.event(event);
        if (!eventData) return false;
        ax = eventData.screenBoxXQJ() - ox;
        ay = eventData.screenBoxYQJ() - oy;
        return ax*ax+ay*ay<=range;
    });
};
QJ.MPMZ.getMinEventId = function(x,y,group,num,range) {
    let basedata=null,min=9999999,id=0,dis,ax,ay;
    num=num||1;
    range=range||null;
    if (group) {
        let eventList = $gameMap._groupListQJ[group]||[];
        basedata = [];
        for (let i=0,il=eventList.length;i<il;i++) {
            if (eventList[i]) {
                basedata.push($gameMap.event(eventList[i]));
            }
        }
    } else {
        basedata=$gameMap.events();
    }
    let lengthRem = {};
    if (range) range=range*range;
    basedata = basedata.filter((event)=>{
        ax = event.screenBoxXQJ()-x;
        ay = event.screenBoxYQJ()-y;
        dis = ax*ax+ay*ay;
        lengthRem[event.eventId()] = dis;
        return range?dis<=range:true;
    });
    if (num<=1) {
        for (let i of basedata) {
            dis = lengthRem[i.eventId()];
            if (dis<min) {
                min = dis;
                id=i.eventId();
            }
        }
    } else {
        basedata = basedata.sort((a,b)=>{
            dis = lengthRem[a.eventId()]-lengthRem[b.eventId()];
            return dis>0?1:(dis<0?-1:0);
        });
        id = basedata[Math.min(num,basedata.length)-1].eventId();
    }
    return id;
};
//=============================================================================
//
//=============================================================================
QJ.MPMZ.forBidDestination = eval(parameters.forBidDestination);
$.Game_Temp_setDestination = Game_Temp.prototype.setDestination
Game_Temp.prototype.setDestination = function(x, y) {
    if (QJ.MPMZ.forBidDestination) return;
    $.Game_Temp_setDestination.call(this,x,y);
};
$.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    $.Game_System_initialize.apply(this);
    this._playerBoxData = {
        offsetX:Number(parameters.playerInitBoxOffsetX),
        offsetY:Number(parameters.playerInitBoxOffsetY),
        body:eval(parameters.playerInitBox)
    };
    /*this._followerBoxData = {
        offsetX:0,
        offsetY:0,
        body:['C',tileSize/2]
    };*/
    this._eventBoxData = {
        offsetX:Number(parameters.eventInitBoxOffsetX),
        offsetY:Number(parameters.eventInitBoxOffsetY),
        body:eval(parameters.eventInitBox)
    };
};
//=============================================================================
//
//=============================================================================
if (isMV) {
ImageManager.loadProjectileQJ = function(filename, hue = 0) {
    if (filename) {
        const url = 'img/projectiles/' + encodeURIComponent(filename).replace(/%2F/g, "/") + ".png";
        let bitmap = this.loadNormalBitmap(url, hue || 0);
        bitmap.smooth = false;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};
} else {
ImageManager.loadProjectileQJ = function(filename) {
    return this.loadBitmap('img/projectiles/', filename);
};
}
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
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================

//=============================================================================
//
//=============================================================================
Game_QJBulletMZ.prototype.initialize = function(data,index) {
    //==========================================
    this.data=data;
    this.index=index;
    this.bulletMode = 0;
    //==========================================
    this.calculateData();
    //==========================================
};
Game_QJBulletMZ.prototype.calculateData = function() {
    //==========================================
    this.dead=false;
    this.time = 0;
    this._x = this.data.position[0];
    this._y = this.data.position[1];
    if (this.data.onScreen) {
        this._orginDisplayX = $gameMap.displayX()*tileSize
        this._orginDisplayY = $gameMap.displayY()*tileSize
    }
    this.x = this._x;
    this.y = this._y;
    this.scaleX = 0;
    this.scaleY = 0;
    this.anchorX = 0;
    this.anchorY = 0;
    this.opacity = 0;
    this.rotationMove = this.data.initialRotation;
    if (this.data.imgRotation[0]=="R") {
        let imgRSynData = this.data.imgRotation[2];
        if (typeof imgRSynData == "number") {
            this.rotationImg = imgRSynData
        } else if (!!imgRSynData) {
            this.rotationImg = this.rotationMove;
        } else {
            this.rotationImg = 0;
        }
    } else {
        this.rotationImg = 0;
    }
    this._animationPlaying = false;
    this.havePierceCharacters = {};
    this.pierceCharactersOutJS = {};
    //R T NP | G P | SW S Time
    //==========================================
    let existData = this.data.existData[0];
    this.needBody = existData.G||existData.P||existData.R||existData.T||existData.N||existData.B||existData.NP||
        (this.data.groupName&&this.data.groupName.length>0);
    this.QJBody = null;
    //==========================================
    this.needRemData = ((this.data.extra&&this.data.extra.needRemData)||this.data.afterImage||(this.data.particles&&this.data.particles.length>0));
    this.dataRem = [];
    //==========================================
    this.needAdvancedData = this.data.moveJS.length>0||this.data.deadJS||this.data.moveCE.length>0;
    //==========================================
    $gameMap.addMapBulletsNameQJ(this.index,this.data.groupName);
    //==========================================
    this.update(true);
    //==========================================
}
Game_QJBulletMZ.prototype.afterDeal = function() {

}
Game_QJBulletMZ.prototype.screenXQJ = function() {
    return this.x;
}
Game_QJBulletMZ.prototype.screenYQJ = function() {
    return this.y;
}
Game_QJBulletMZ.prototype.screenXShowQJ = function() {
    return this.x - $gameMap.displayX()*tileSize;
}
Game_QJBulletMZ.prototype.screenYShowQJ = function() {
    return this.y - $gameMap.displayY()*tileSize;
}
Game_QJBulletMZ.prototype.inheritX = function() {
    return this.x - $gameMap.displayX()*tileSize;
}
Game_QJBulletMZ.prototype.inheritY = function() {
    return this.y - $gameMap.displayY()*tileSize;
}
Game_QJBulletMZ.prototype.inheritRotation = function() {
    return this.rotationMove;
}
Game_QJBulletMZ.prototype.screenRotationShowQJ = function() {
    return this.rotationMove*180/Math.PI;
}
Game_QJBulletMZ.prototype.destroy = function() {
    this.deadOver = true;
    this.data.event = null;
    $gameMap.removeBulletQJ(this.index);
    $gameMap.deleteMapBulletsNameQJ(this.index,this.data.groupName);
};
Game_QJBulletMZ.prototype.refreshBox = function(justMakeData) {
    let body;
    if (justMakeData) {
        body = justMakeData;
    } else {
        if (this.data.collisionBox[0]=='auto') {
            if (this.data.bitmapWidth&&this.data.bitmapHeight) {
                this.data.collisionBox = body = ['R',this.data.bitmapWidth,this.data.bitmapHeight];
            } else {
                body = ['R',1,1];
                setTimeout(this.refreshBox.bind(this),5);
            }
        } else {
            body = this.data.collisionBox;
        }
    }
    let newSATBody;
    let ox = body[1]*this.scaleX*(0.5-(body[3]==undefined?this.anchorX:body[3]));
    let oy = body[2]*this.scaleY*(0.5-(body[4]==undefined?this.anchorY:body[4]));
    if (body[0]=='C') {
        newSATBody = QJ.SAT.box(this.x,this.y,['C',body[1]*(this.scaleX+this.scaleY)/2]);
        let len = Math.sqrt(ox*ox+oy*oy);
        let ro = this.rotationImg*Math.PI/180+Math.atan2(ox,-oy);
        newSATBody.setOffset(new SATVector(len*Math.sin(ro),-len*Math.cos(ro)));
    } else if (body[0]=='R') {
        newSATBody = QJ.SAT.box(this.x,this.y,['R',body[1]*this.scaleX,body[2]*this.scaleY]);
        newSATBody['angle'] = this.rotationImg*Math.PI/180;
        newSATBody.setOffset(new SATVector(ox,oy));
    }
    if (justMakeData) return newSATBody;
    else this.QJBody = newSATBody;
};
Game_QJBulletMZ.prototype.updateBodyPosition = function(extraBodyData) {
    QJ.SAT.setPostion(extraBodyData?extraBodyData:this.QJBody,this.x,this.y);
};
Game_QJBulletMZ.prototype.updateFadeValue = function() {
    let data = this.data;
    this.opacity = data.opacity.get();
    let newScaleX = data.scale[0].get();
    let newScaleY = data.scale[1].get();
    let newAnchorX = data.anchor[0].get();
    let newAnchorY = data.anchor[1].get();
    if (this.scaleX!=newScaleX||this.scaleY!=newScaleY||
        this.anchorX!=newAnchorX||this.anchorY!=newAnchorY) {
        this.scaleX = newScaleX;
        this.scaleY = newScaleY;
        this.anchorX = newAnchorX;
        this.anchorY = newAnchorY;
        this._needRefreshBox = true;
    }
};
Game_QJBulletMZ.prototype.updateJSAndQT = function() {
    //=======================
    let data = this.data;
    //=======================
    if (data.moveJS) {
        for (let i=0,il=data.moveJS.length,detail;i<il;i++) {
            detail = data.moveJS[i];
            if (detail[0]<=0) {
                if (detail[1]==-2) {
                    //
                } else if (detail[1]==-1) {
                    eval(detail[2]);
                    detail[1] = -2;
                } else if (detail[1]==0) {
                    eval(detail[2]);
                    detail[1] = detail[3];
                } else {
                    detail[1]--;
                }
            } else {
                detail[0]--;
            }
        }
    }
    //=======================
    if (data.moveCE.length>0) {
        for (let i=0,il=data.moveCE.length,detail;i<il;i++) {
            detail = data.moveCE[i];
            if (detail[0]<=0) {
                if (detail[1]==-2) {
                    //
                } else if (detail[1]==-1) {
                    $gameMap.steupCEQJ(detail[2],null,{bullet:this,targetId:0,sendValue:detail[3]},{});
                    detail[1] = -2;
                } else if (detail[1]==0) {
                    $gameMap.steupCEQJ(detail[2],null,{bullet:this,targetId:0,sendValue:detail[3]},{});
                    detail[1] = detail[4];
                } else {
                    detail[1]--;
                }
            } else {
                detail[0]--;
            }
        }
    }
    //=======================
};
Game_QJBulletMZ.prototype.remData = function() {
    //=======================
    this.dataRem.push({x:this.x,y:this.y});
    //=======================
};
Game_QJBulletMZ.prototype.remDataGet = function(index) {
    //=======================
    return this.dataRem[Math.max(0,this.dataRem.length-1+index)]
    //=======================
};
Game_QJBulletMZ.prototype.remDataGetAt = function(index) {
    //=======================
    return this.dataRem[index.clamp(0,this.dataRem.length-1)]
    //=======================
};
Game_QJBulletMZ.prototype.updateDynamicBitmap = function() {
    //=======================
    if (this.dynamicBitmap) this.dynamicBitmap.add();
    //=======================
};
Game_QJBulletMZ.prototype.buildDynamicBitmap = function(name,bitmap) {
    //=======================
    this.dynamicBitmap = new AnimatedQJ(name);
    this.dynamicBitmap.saveWH(bitmap.width,bitmap.height);
    //=======================
};
Game_QJBulletMZ.prototype.setDynamicBitmap = function(sprite) {
    //=======================
    if (this.dynamicBitmap) this.dynamicBitmap.setSaveWH(sprite,true);
    //=======================
};
Game_QJBulletMZ.prototype.refreshDynamicBitmap = function(sprite) {
    //=======================
    if (this.dynamicBitmap) this.dynamicBitmap.setSaveWH(sprite,false);
    //=======================
};
Game_QJBulletMZ.prototype.update = function (ifInit) {
    //console.time("bulletUpdate");
    //=======================
    if (this.dead) {
        if (this.needRemData) this.remData();
        this.updateDead();
        return;
    }
    //=======================
    this.time++;
    this._needRefreshBox = false;
    this.updateFadeValue();
    this.updateMove();
    this.updateImgRotation();
    if (this.needBody) {
        if (this._needRefreshBox) {
            this.refreshBox();
        } else {
            this.updateBodyPosition();
        }
    }
    this.updateExistData();
    if (this.needAdvancedData) this.updateJSAndQT();
    if (this.needRemData) this.remData();
    //=======================
    if (!this.dead) {
        this.updateDynamicBitmap();
    }
    //=======================
    //console.timeEnd("bulletUpdate");
};
Game_QJBulletMZ.prototype.updateDead = function(ifWaitAnimation) {
    let deadDeal1 = this.updateImgDeadAnim();
    let deadDeal2 = this.updateAfterImageDelay();
    let deadDeal3 = ifWaitAnimation?false:this.updateSystemAnim();
    if (deadDeal1&&deadDeal2&&deadDeal3) this.destroy();
}
Game_QJBulletMZ.prototype.updateMove = function() {
    //=======================
    let data = this.data,moveType = data.moveType;
    //=======================
    if (moveType[0]=='S') {
        if (!moveType[2]) {
            moveType[2] = {speed:0,oldSpeed:0,moveX:0,moveY:0,rotation:NaN};
            moveType[1] = new DEFrameQJ(null,moveType[1],0);
        }
        moveType[2].speed = moveType[1].get();
        if (moveType[2].rotation!=this.rotationMove||moveType[2].speed!=moveType[2].oldSpeed) {
            moveType[2].oldSpeed=moveType[2].speed;
            moveType[2].rotation = this.rotationMove;
            let radian = moveType[2].rotation*Math.PI/180;
            let speed = moveType[2].speed;
            moveType[2].moveX = speed*Math.sin(radian);
            moveType[2].moveY = -speed*Math.cos(radian);
        }
        this.x += moveType[2].moveX;
        this.y += moveType[2].moveY;
    } else if (moveType[0]=='TP'||moveType[0]=='TG') {
        let target,dealData,newRotation,newSpeed;
        if (moveType[0]=='TP') {
            if (moveType.length<=4) {
                if (moveType.length==3) moveType.push(0);
                moveType[4] = {speed:0,maxRotation:0,rd:0};
                moveType[1] = new DEFrameQJ(null,moveType[1],0);
                moveType[2] = new DEFrameQJ(null,moveType[2],0);
                moveType[3] = new DEFrameQJ(null,moveType[3],0);
            }
            dealData = moveType[4];
            dealData.speed = moveType[1].get();
            dealData.maxRotation = moveType[2].get();
            dealData.rd = moveType[3].get();
            target = $gamePlayer;
        } else {
            if (moveType.length<=5) {
                if (moveType.length==4) moveType.push(0);
                moveType[5] = {speed:0,maxRotation:0,rd:0};
                moveType[2] = new DEFrameQJ(null,moveType[2],0);
                moveType[3] = new DEFrameQJ(null,moveType[3],0);
                moveType[4] = new DEFrameQJ(null,moveType[4],0);
            }
            dealData = moveType[5];
            dealData.speed = moveType[2].get();
            dealData.maxRotation = moveType[3].get();
            dealData.rd = moveType[4].get();
            let id = QJ.MPMZ.getMinEventId(this.x,this.y,moveType[1]);
            target = id>0?QJ.getCharacter(id):null;
        }
        if (target) {
            let targetX = target.screenBoxXQJ();
            let targetY = target.screenBoxYQJ();
            let targetRo = QJ.calculateAngleByTwoPointAngle(this.x,this.y,targetX,targetY)+
                Math.floor(Math.random()*dealData.rd);
            let rod=Math.abs(targetRo-this.rotationMove)%360;
            rod=rod>180?(180*2-rod):rod;
            if (rod<=dealData.maxRotation) {
                this.rotationMove=targetRo;
            } else {
                let rodp=Math.abs(targetRo-this.rotationMove-dealData.maxRotation);
                let rodm=Math.abs(targetRo-this.rotationMove+dealData.maxRotation);
                rodp=rodp>180?(180*2-rodp):rodp;
                rodm=rodm>180?(180*2-rodm):rodm;
                if (rodp>rodm) this.rotationMove-=dealData.maxRotation;
                else this.rotationMove+=dealData.maxRotation;
            }
        }
        let radian = this.rotationMove*Math.PI/180;
        dealData.moveX = dealData.speed*Math.sin(radian);
        dealData.moveY = -dealData.speed*Math.cos(radian);
        this.x += dealData.moveX;
        this.y += dealData.moveY;
    } else if (moveType[0]=='F') {
        if (moveType.length==3) {
            moveType.push({});
        }
        let t = this.time;
        let xL = Number(eval(moveType[1]));
        let yL = Number(eval(moveType[2]));
        let rotation = this.data.initialRotation*Math.PI/180;
        let lastX = this.x,lastY = this.y;
        if (isNaN(xL)||isNaN(yL)) {
            this.setDead();
            return;
        } else {
            this.x = xL*Math.sin(rotation)+ yL*Math.sin(rotation+Math.PI/2)+this._x;
            this.y = -xL*Math.cos(rotation)-yL*Math.cos(rotation+Math.PI/2)+this._y;
        }
        let newRotation = QJ.calculateAngleByTwoPointAngle(lastX,lastY,this.x,this.y);
        if (!isNaN(newRotation)) this.rotationMove = newRotation;
    } else if (moveType[0]=='QC') {
        if (moveType.length==5) {
            moveType[1] = moveType[1].clamp(1,89)*Math.PI/180;
            moveType.push({
                ground:this.data.initialRotation*Math.PI/180,
                times:moveType[2],
                time:0,
                kx:moveType[3]/moveType[4],
            });
            let data = moveType[5];
            data.disAll = data.times*moveType[3];
            data.timeAll = data.times*moveType[4];
            data.a = -Math.tan(moveType[1])/(moveType[2]*moveType[3]);
            data.f = data.a+'*x*x+'+(-1*data.a)+'*x*'+data.disAll;
        }
        let lastX = this.x,lastY = this.y;
        if (moveType[5].times>0) {
            let data = moveType[5];
            data.time++;
            if (data.time>data.timeAll) {
                data.times--;
                data.time = 0;
                data.disAll = data.times*moveType[3];
                data.timeAll = data.times*moveType[4];
                data.a = -Math.tan(moveType[1])/(moveType[2]*moveType[3]);
                data.f = data.a+'*x*x+'+(-1*data.a)+'*x*'+data.disAll;
                this._x = this.x;
                this._y = this.y;
            } else {
                let x = data.kx*data.time;
                let y = -Number(eval(data.f));
                let lx = x*Math.cos(Math.PI/2-data.ground);
                let ly = -x*Math.sin(Math.PI/2-data.ground)+y;
                this.x = this._x + lx;
                this.y = this._y + ly;
            }
        }
        let newRotation = QJ.calculateAngleByTwoPointAngle(lastX,lastY,this.x,this.y);
        if (!isNaN(newRotation)) this.rotationMove = newRotation;
    } else if (moveType[0]=='B') {
        if (moveType.length==2) {
            moveType = moveType.concat([0,0,0,0,0,0,0,0]);
        }
        let lastX = this.x,lastY = this.y;
        let character = QJ.getCharacter(moveType[1]==0?this.data.eventId:moveType[1]);
        if (character) {//&&SceneManager._scene._spriteset
            let dir = Math.floor(character.direction()/2)*2;
            this.x = character.screenShootXQJ()+$gameMap.displayX()*tileSize+moveType[dir];//character._realX*tileSize+tileSize/2+moveType[dir];
            this.y = character.screenShootYQJ()+$gameMap.displayY()*tileSize+moveType[dir+1]//character._realY*tileSize+tileSize/2+moveType[dir+1];
        } else {
            this.setDead();
            return;
        }
    } else if (moveType[0]=='C') {
        let noOriginData = true;
        if (moveType.length<=5) {
            if (moveType.length==4) moveType.push(0);
            else moveType[4] = Math.max(0.1,moveType[4]);
            moveType[2] = new DEFrameQJ(null,moveType[2],0);
            moveType[3] = new DEFrameQJ(null,moveType[3],0);
            moveType.push({rotation:this.rotationMove*Math.PI/180,radius:0,speed:0});
            noOriginData = false;
        }
        let lastX = this.x,lastY = this.y;
        let character = QJ.getCharacter(moveType[1]);
        let newRotation;
        if (character&&SceneManager._scene._spriteset) {
            moveType[5].radius=moveType[2].get();
            moveType[5].speed=moveType[3].get();
            moveType[5].rotation+=moveType[5].speed;
            if (moveType[4]&&noOriginData) {
                let tarX = character._realX*tileSize+tileSize/2+moveType[5].radius*Math.sin(moveType[5].rotation);
                let tarY = character._realY*tileSize+tileSize/2-moveType[5].radius*Math.cos(moveType[5].rotation);
                this.x = Math.abs(this.x-tarX)<=(moveType[5].radius*Math.tan(moveType[5].speed))?tarX:(this.x+(tarX-this.x)/Math.abs(this.x-tarX)*(moveType[4]+0.1));
                this.y = Math.abs(this.y-tarY)<=(moveType[5].radius*Math.tan(moveType[5].speed))?tarY:(this.y+(tarY-this.y)/Math.abs(this.y-tarY)*(moveType[4]+0.1));
                newRotation = QJ.calculateAngleByTwoPointAngle(lastX,lastY,this.x,this.y);
            } else {
                this.x = character._realX*tileSize+tileSize/2+moveType[5].radius*Math.sin(moveType[5].rotation);
                this.y = character._realY*tileSize+tileSize/2-moveType[5].radius*Math.cos(moveType[5].rotation);
                newRotation = moveType[5].rotation*180/Math.PI+90;//QJ.calculateAngleByTwoPointAngle(lastX,lastY,this.x,this.y);
            }
        } else {
            this.setDead();
            return;
        }
        if (!isNaN(newRotation)) this.rotationMove = newRotation;
    } else if (moveType[0]=='D') {
        let event = QJ.getCharacter(data.eventId);
        let position = QJ.MPMZ.model[0].posExtra(JsonEx.makeDeepCopy(data.positionRem),event);
        this.x = position[0]+$gameMap.displayX()*tileSize;
        this.y = position[1]+$gameMap.displayY()*tileSize;
        if (moveType[1]) {
            this.rotationMove = QJ.MPMZ.model[0].initialRotationExtra(JsonEx.makeDeepCopy(data.initialRotationRem),event,position);
        }
    } 
    if (data.onScreen) {
        let tx = $gameMap.displayX()*tileSize;
        let ty = $gameMap.displayY()*tileSize;
        let ox = tx - this._orginDisplayX;
        let oy = ty - this._orginDisplayY;
        this.x += ox;
        this.y += oy;
        this._orginDisplayX = tx;
        this._orginDisplayY = ty;
    }
    //=======================
    //=======================
};
Game_QJBulletMZ.prototype.updateImgRotation = function() {
    //=======================
    let data = this.data;
    let remData = this.rotationImg;
    switch(data.imgRotation[0]) {
        case 'F':this.rotationImg = this.rotationMove + (data.imgRotation[1]?data.imgRotation[1]:0);break;
        case 'R':this.rotationImg += data.imgRotation[1].get();break;
        case 'S':this.rotationImg = data.imgRotation[1];break;
    }
    if (remData!=this.rotationImg) {
        this._needRefreshBox = true;
    }
    //=======================
};
Game_QJBulletMZ.prototype.JudgeReBound = function (sat,tb,cb,detail) {
    if (!detail.rb||detail.rb[0]==0) {
        if (detail.t[0]=='P'||detail.t[0]=='G'||detail.t[0]=='B') {
            return true;
        } else {
            return this.setDead(detail);
        }
    } else {
        detail.rb[0]--;
        this.x -= Math.floor(Math.sign(sat.overlapV.x)*(Math.abs(sat.overlapV.x)+0.5));
        this.y -= Math.floor(Math.sign(sat.overlapV.y)*(Math.abs(sat.overlapV.y)+0.5));
        this.remData();
        QJ.SAT.setPostion(tb,this.x,this.y);
        //====================================
        if (this.data.moveType[0]=='QC') {
            let moveType = this.data.moveType;
            if (moveType.length<=5) this.updateMove();
            moveType[5].time=moveType[5].timeAll;
            this.updateMove();
            moveType[5].ground = moveType[5].ground*180/Math.PI;
            let oldR = moveType[5].ground,tbp=tb.pos,cbp=cb.pos,dl=45;
            let du = QJ.calculateAngleByTwoPointAngle(cbp.x,cbp.y,tbp.x,tbp.y);
            if (du<dl) moveType[5].ground=180-oldR;
            else if (du<180-dl) moveType[5].ground=-oldR;
            else if (du<180+dl) moveType[5].ground=180-oldR;
            else if (du<2*180-dl) moveType[5].ground=-oldR;
            else moveType[5].ground=180-oldR;
            if (moveType[5].ground>2*180) moveType[5].ground-=2*180;
            if (moveType[5].ground<0) moveType[5].ground+=2*180;
            moveType[5].ground = moveType[5].ground*Math.PI/180;
        } else {
            let oldR = this.rotationMove,tbp=tb.pos,cbp=cb.pos,dl=45;
            let du = QJ.calculateAngleByTwoPointAngle(cbp.x,cbp.y,tbp.x,tbp.y);
            if (du<dl) this.rotationMove=180-oldR;
            else if (du<180-dl) this.rotationMove=-oldR;
            else if (du<180+dl) this.rotationMove=180-oldR;
            else if (du<2*180-dl) this.rotationMove=-oldR;
            else this.rotationMove=180-oldR;
            if (this.rotationMove>2*180) this.rotationMove-=2*180;
            if (this.rotationMove<0) this.rotationMove+=2*180;
        }
        //====================================
        if (detail.a&&(detail.rb[0]==0||(detail.rb[0]!=0&&detail.rb[2]))) {
            this.dealAction(detail.a,null,null,false,true);
        }
        //====================================
        if (detail.an>0&&(detail.rb[0]==0||(detail.rb[0]!=0&&detail.rb[1]))) {
            this.requestAnimationId = detail.an;
        }
        //====================================
        return false;
        //====================================
    }
}
Game_QJBulletMZ.prototype.setDead = function(data,target = null,bulletTarget = null) {
    //==============================================
    if (!data) {
        this.destroy();
        this.dead = true;
        return true;
    } else {
        if (target) {
            let tempId = QJ.buildCharacter(target);
            if (this.havePierceCharacters[tempId]) {
                this.havePierceCharacters[tempId] = 2;
                return false;
            }
        }
        //==============================================c->condition
        if (data.c) {
            if (data.c[0]=='SW'||data.c[0]=='Switch') {
                if ($gameSwitches.value(detail.c[1])!=detail.c[2]) return false;
            } else if (data.c[0]=='S'||data.c[0]=='Script') {
                if (typeof data.c[1] == 'string') {
                    if (!eval(data.c[1])) return false;
                } else {
                    let callFunction = QJ.MPMZ.getSaveFunction(data.c[1]);
                    if (!(callFunction&&!callFunction.call(this,target,bulletTarget,data.c))) return false;
                }
            }
        }
        //==============================================
        if (data.d) {
            if (data.d[1]==0) {
                this.opacity = 0;
            } else {
                if (data.d[0]==0) {
                    if (data.d.length==2) {
                        data.d.push(null);
                        data.d.push({t:0,
                            fadeFun:new DEFrameQJ(null,'0|'+this.opacity+'~'+data.d[1]+'/0',0)});
                    }
                } else if (data.d[0]==1) {
                    if (data.d.length==3) {
                        data.d.push({t:0,
                            fadeFun:new DEFrameQJ(null,'0|'+this.opacity+'~'+data.d[1]+'/0',0),
                            scaleXFun:new DEFrameQJ(null,'0|'+this.scaleX+'~'+data.d[1]+'/'+(this.scaleX*data.d[2]),0),
                            scaleYFun:new DEFrameQJ(null,'0|'+this.scaleY+'~'+data.d[1]+'/'+(this.scaleY*data.d[2]),0)});
                    }
                }
                this.imgDeadAnimData = data.d;
            }
        }
        //==============================================
        if (data.an>0&&(data.p[0]==0||(data.p[0]!=0&&data.p[1]))) {
            this.requestAnimationId = data.an;
        }
        //==============================================
        if (data.r&&(data.p[0]==0||(data.p[0]!=0&&data.p[2]))) {
            this.rangeDeal(data.r);
        }
        //==============================================
        if (data.a&&(data.p[0]==0||(data.p[0]!=0&&data.p[2]))) {
            this.dealAction(data.a,target,bulletTarget,data.p[0]!=0,false);
        }
        //==============================================
        //==============================================
        //==============================================
        //==============================================
        if (this.data.afterImage&&this.data.afterImage[4]) {
            this.afterImageDelay = [this.data.afterImage[2],0];
        }
        //==============================================
        /*if (data.p[0]<=0) {
            this.updateDead(this.requestAnimationId>0);
        }*/
        //==============================================
        if (data.p[0]<=0) {
            if (this.data.deadJS) eval(data.deadJS);
        }
        //==============================================
    }
    //==============================================
    //console.log("dead");
    if (data.p[0]==0) {
        this.dead = true;
        return true;
    } else {
        if (target&&(data.t[0]=='G'||data.t[0]=='P')) {
            let index = QJ.buildCharacter(target);
            this.havePierceCharacters[index] = 2;
            if (data.p[3]) {
                eval(data.p[3]);
            }
            if (data.p[4]) {
                this.pierceCharactersOutJS[index] = data.p[4];
            }
            data.p[0]--;
        }
        return false;
    }
    //==============================================
};
Game_QJBulletMZ.prototype.dealAction = function(actionData = [],target = null,bulletTarget = null,ifPierce = false,ifRebound = false) {
    if (target) {
        if (target==$gamePlayer) {
            if (actionData[0]=='C'||actionData[0]=='CommonEvent') {
                $gameMap.steupCEQJ(actionData[1],QJ.buildCharacter(i),{
                    bulletId:this.index,
                    ifPierce:ifPierce,
                    ifRebound:ifRebound,
                    targetId:-1,
                    sendValue:actionData[2]||[]
                },{});
            } else if (actionData[0]=='SW'||actionData[0]=='Switch') {
                $gameSwitches.setValue(actionData[1],!!actionData[2]);
            } else if (actionData[0]=='S'||actionData[0]=='Script') {
                if (typeof actionData[1] == 'string') {
                    if (eval(actionData[1])) return false;
                } else {
                    let callFunction = QJ.MPMZ.getSaveFunction(actionData[1]);
                    if (callFunction&&!callFunction.call(this,target,bulletTarget,actionData)) return false;
                }
            }
        } else if (target.constructor.name.toLowerCase().includes("event")) {
            if (actionData[0]=='EP'||actionData[0]=='EventPage') {
                target.steupCEQJ(actionData[1],{
                    bulletId:this.index,
                    ifPierce:ifPierce,
                    ifRebound:ifRebound,
                    sendValue:actionData[2]||[]
                },{});
            } else if (actionData[0]=='C'||actionData[0]=='CommonEvent') {
                $gameMap.steupCEQJ(actionData[1],QJ.buildCharacter(target),{
                    bulletId:this.index,
                    ifPierce:ifPierce,
                    ifRebound:ifRebound,
                    targetId:QJ.buildCharacter(target),
                    sendValue:actionData[2]||[]
                },{});
            } else if (actionData[0]=='SW'||actionData[0]=='Switch') {
                $gameSwitches.setValue(actionData[1],!!actionData[2]);
            } else if (actionData[0]=='SS'||actionData[0]=='SelfSwitch') {
                $gameSelfSwitches.setValue([$gameMap.mapId(),target.eventId(),actionData[1].toUpperCase()],!!actionData[2]);
            } else if (actionData[0]=='E'||actionData[0]=='Erase') {
                $gameMap.eraseEvent(target.eventId());
            } else if (actionData[0]=='S'||actionData[0]=='Script') {
                if (typeof actionData[1] == 'string') {
                    if (eval(actionData[1])) return false;
                } else {
                    let callFunction = QJ.MPMZ.getSaveFunction(actionData[1]);
                    if (callFunction&&!callFunction.call(this,target,bulletTarget,actionData)) return false;
                }
            }
        }
    } else {
        if (actionData[0]=='C'||actionData[0]=='CommonEvent') {
            $gameMap.steupCEQJ(actionData[1],QJ.buildCharacter(i),{
                bulletId:this.index,
                ifPierce:ifPierce,
                ifRebound:ifRebound,
                targetId:bulletTarget?bulletTarget.index:0,
                sendValue:actionData[2]||[]
            },{});
        } else if (actionData[0]=='SW'||actionData[0]=='Switch') {
            $gameSwitches.setValue(actionData[1],!!actionData[2]);
        } else if (actionData[0]=='S'||actionData[0]=='Script') {
            if (typeof actionData[1] == 'string') {
                if (eval(actionData[1])) return false;
            } else {
                let callFunction = QJ.MPMZ.getSaveFunction(actionData[1]);
                if (callFunction&&!callFunction.call(this,target,bulletTarget,actionData)) return false;
            }
        }
    }
}
Game_QJBulletMZ.prototype.rangeDeal = function(rangeData) {
    for (let i of rangeData) {
        this.rangeAtk([this.x,this.y],i.t,i.a,i.cb||this.collisionBox);
    }
}
Game_QJBulletMZ.prototype.rangeAtk = function(position,target,action,collisionBox,lastAtkCharacter = {}) {
    let body,result = QJ.SAT.sat;
    if (collisionBox.constructor === Array) {
        body = QJ.SAT.boxX(position[0],position[1],collisionBox,this.scaleX||1,this.scaleY||1,this.anchorX||0.5,this.anchorY||0.5,this.rotationImg||0);
    } else {
        body = collisionBox;
        QJ.SAT.setPostion(body,position[0],position[1]);
    }
    if (target[0]=='P') {
        //=============================================================
        QJ.SAT.judge(body,$gamePlayer._boxBodyQJ);
        if (result.result) Game_QJBulletMZ.prototype.dealAction.call(this,action,$gamePlayer);
        //=============================================================
    } else if (target[0]=='G') {
        //=============================================================
        if (typeof target[1] != 'object') target[1] = [target[1]];
        let haveAtkList = {},character;
        for (let i of target) {
            if ($gameMap._groupListQJ[i]) {
                 for (let j of $gameMap._groupListQJ[i]) {
                    if (haveAtkList[j]||lastAtkCharacter[j]) continue;
                    haveAtkList[j] = true;
                    character = QJ.getCharacter(j);
                    if (character&&character._boxBodyQJ) {
                        QJ.SAT.judge(body,character._boxBodyQJ);
                        if (result.result) Game_QJBulletMZ.prototype.dealAction.call(this,action,character);
                    }
                 }
            } 
        }
        //=============================================================
    }
}
Game_QJBulletMZ.prototype.updateImgDeadAnim = function() {
    if (this.imgDeadAnimData) {
        let data = this.imgDeadAnimData[3];
        if (data.t>=this.imgDeadAnimData[1]) {
            return true;
        } else {
            data.t++;
            if (data.fadeFun) {this.opacity = data.fadeFun.get();}
            if (data.scaleXFun) {this.scaleX = data.scaleXFun.get();}
            if (data.scaleYFun) {this.scaleY = data.scaleYFun.get();}
            return data.t>=this.imgDeadAnimData[1];
        }
    } else return true;
}
Game_QJBulletMZ.prototype.updateSystemAnim = function() {
    return !this.isAnimationPlaying();
}
Game_QJBulletMZ.prototype.updateAfterImageDelay = function() {
    if (this.afterImageDelay) {
        this.afterImageDelay[1]++;
        return this.afterImageDelay[1]>this.afterImageDelay[0];
    } else return true;
}
Game_QJBulletMZ.prototype.updateExistData = function(haveTile = true,haveRebound = true,haveTime = true,ifPierce = true,ifTarget = true) {
    let startX,startY,endX,endY;
    let mapBox = $gameMap._gridBodyQJ;
    let result = QJ.SAT.sat,gridData;
    let judgeBody;
    for (let k=1,kdata=this.data.existData,kl=kdata.length,detail;k<kl;k++) {
        detail = kdata[k];
        if (haveTile) {
            if (detail.t[0]=='R') {
                judgeBody  = this.getRealExistDataCollisionBox(detail);
                startX = Math.max(Math.min(Math.floor((this.x-judgeBody.dia)/tileSize),$gameMap.width()-1),0);
                startY = Math.max(Math.min(Math.floor((this.y-judgeBody.dia)/tileSize),$gameMap.height()-1),0);
                endX = Math.max(Math.min(Math.ceil((this.x+judgeBody.dia)/tileSize),$gameMap.width()),0);
                endY = Math.max(Math.min(Math.ceil((this.y+judgeBody.dia)/tileSize),$gameMap.height()),0);
                if (typeof detail.t[1] != 'object') detail.t[1] = [detail.t[1]];
                //=============================================================
                for (let x=startX;x<endX;x++) {
                    for (let y=startY;y<endY;y++) {
                        gridData = $gameMap.regionId(x,y);
                        if (detail.t[1].includes(gridData)) {
                            QJ.SAT.setPostion(mapBox,x*tileSize+tileSize/2,y*tileSize+tileSize/2);
                            QJ.SAT.judge(judgeBody,mapBox);
                            if (haveRebound) {
                                if (result.result&&this.JudgeReBound(result,judgeBody,mapBox,detail)) return;
                            } else {
                                if (result.result) return;
                            }
                        }
                    }
                }
                //=============================================================
            } else if (detail.t[0]=='T') {
                judgeBody  = this.getRealExistDataCollisionBox(detail);
                startX = Math.max(Math.min(Math.floor((this.x-judgeBody.dia)/tileSize),$gameMap.width()-1),0);
                startY = Math.max(Math.min(Math.floor((this.y-judgeBody.dia)/tileSize),$gameMap.height()-1),0);
                endX = Math.max(Math.min(Math.ceil((this.x+judgeBody.dia)/tileSize),$gameMap.width()),0);
                endY = Math.max(Math.min(Math.ceil((this.y+judgeBody.dia)/tileSize),$gameMap.height()),0);
                if (typeof detail.t[1] != 'object') detail.t[1] = [detail.t[1]];
                //=============================================================
                for (let x=startX;x<endX;x++) {
                    for (let y=startY;y<endY;y++) {
                        gridData = $gameMap.terrainTag(x,y);
                        if (detail.t[1].includes(gridData)) {
                            QJ.SAT.setPostion(mapBox,x*tileSize+tileSize/2,y*tileSize+tileSize/2);
                            QJ.SAT.judge(judgeBody,mapBox);
                            if (haveRebound) {
                                if (result.result&&this.JudgeReBound(result,judgeBody,mapBox,detail)) return;
                            } else {
                                if (result.result) return;
                            }
                        }
                    }
                }
                //=============================================================
            } else if (detail.t[0]=='NP') {
                judgeBody  = this.getRealExistDataCollisionBox(detail);
                startX = Math.max(Math.min(Math.floor((this.x-judgeBody.dia)/tileSize),$gameMap.width()-1),0);
                startY = Math.max(Math.min(Math.floor((this.y-judgeBody.dia)/tileSize),$gameMap.height()-1),0);
                endX = Math.max(Math.min(Math.ceil((this.x+judgeBody.dia)/tileSize),$gameMap.width()),0);
                endY = Math.max(Math.min(Math.ceil((this.y+judgeBody.dia)/tileSize),$gameMap.height()),0);
                //=============================================================
                for (let x=startX;x<endX;x++) {
                    for (let y=startY;y<endY;y++) {
                        if (!$gameMap._noPassBoxQJ[x][y]) {
                            QJ.SAT.setPostion(mapBox,x*tileSize+tileSize/2,y*tileSize+tileSize/2);
                            QJ.SAT.judge(judgeBody,mapBox);
                            if (haveRebound) {
                                if (result.result&&this.JudgeReBound(result,judgeBody,mapBox,detail)) return;
                            } else {
                                if (result.result) return;
                            }
                        }
                    }
                }
                //=============================================================
            }
        }
        if (haveTime) {
            if (detail.t[0]=='SW') {
                //=============================================================
                if ($gameSwitches.value(detail.t[1])==detail.t[2]) {
                    if (this.setDead(detail)) return;
                } 
                //=============================================================
            } else if (detail.t[0]=='Time') {
                //=============================================================
                if (this.time>detail.t[1]) {
                    if (this.setDead(detail)) return;
                } 
                //=============================================================
            } else if (detail.t[0]=='S') {
                let calculateResult = null;
                if (typeof detail.t[1] == 'string') {
                    calculateResult = eval(detail.t[1]);
                } else {
                    let callFunction = QJ.MPMZ.getSaveFunction(detail.t[1]);
                    if (callFunction) {
                        calculateResult = callFunction.call(this);
                    }
                }
                //=============================================================
                if (calculateResult==detail.t[2]) {
                    if (this.setDead(detail)) return;
                } 
                //=============================================================
            }
        }
        if (ifTarget) {
            if (detail.t[0]=='P') {
                judgeBody  = this.getRealExistDataCollisionBox(detail);
                startX = Math.max(Math.min(Math.floor((this.x-judgeBody.dia)/tileSize),$gameMap.width()-1),0);
                startY = Math.max(Math.min(Math.floor((this.y-judgeBody.dia)/tileSize),$gameMap.height()-1),0);
                endX = Math.max(Math.min(Math.ceil((this.x+judgeBody.dia)/tileSize),$gameMap.width()),0);
                endY = Math.max(Math.min(Math.ceil((this.y+judgeBody.dia)/tileSize),$gameMap.height()),0);
                //=============================================================
                QJ.SAT.judge(judgeBody,$gamePlayer._boxBodyQJ);
                if (haveRebound) {
                    if (result.result&&this.JudgeReBound(result,judgeBody,$gamePlayer._boxBodyQJ,detail)) {
                        if (this.setDead(detail,$gamePlayer,null)) return;
                    }
                } else {
                    if (result.result) {
                        if (this.setDead(detail,$gamePlayer,null)) return;
                    }
                }
                //=============================================================
            } else if (detail.t[0]=='G') {
                judgeBody  = this.getRealExistDataCollisionBox(detail);
                startX = Math.max(Math.min(Math.floor((this.x-judgeBody.dia)/tileSize),$gameMap.width()-1),0);
                startY = Math.max(Math.min(Math.floor((this.y-judgeBody.dia)/tileSize),$gameMap.height()-1),0);
                endX = Math.max(Math.min(Math.ceil((this.x+judgeBody.dia)/tileSize),$gameMap.width()),0);
                endY = Math.max(Math.min(Math.ceil((this.y+judgeBody.dia)/tileSize),$gameMap.height()),0);
                //=============================================================
                if (typeof detail.t[1] != 'object') detail.t[1] = [detail.t[1]];
                let haveAtkList = {},character;
                for (let i of detail.t[1]) {
                    if ($gameMap._groupListQJ[i]) {
                         for (let j of $gameMap._groupListQJ[i]) {
                            if (haveAtkList[j]) continue;
                            haveAtkList[j] = true;
                            character = QJ.getCharacter(j);
                            if (character&&character._boxBodyQJ) {
                                QJ.SAT.judge(judgeBody,character._boxBodyQJ);
                                if (haveRebound) {
                                    if (result.result&&this.JudgeReBound(result,judgeBody,character._boxBodyQJ,detail)) {
                                        if (this.setDead(detail,character,null)) return;
                                    }
                                } else {
                                    if (result.result) {
                                        if (this.setDead(detail,character,null)) return;
                                    }
                                }
                            }
                         }
                    } 
                }
                //=============================================================
            } else if (detail.t[0]=='B') {
                judgeBody  = this.getRealExistDataCollisionBox(detail);
                startX = Math.max(Math.min(Math.floor((this.x-judgeBody.dia)/tileSize),$gameMap.width()-1),0);
                startY = Math.max(Math.min(Math.floor((this.y-judgeBody.dia)/tileSize),$gameMap.height()-1),0);
                endX = Math.max(Math.min(Math.ceil((this.x+judgeBody.dia)/tileSize),$gameMap.width()),0);
                endY = Math.max(Math.min(Math.ceil((this.y+judgeBody.dia)/tileSize),$gameMap.height()),0);
                //=============================================================
                if (typeof detail.t[1] != 'object') detail.t[1] = [detail.t[1]];
                let haveAtkList = {},character;
                for (let i of detail.t[1]) {
                    if ($gameMap._mapBulletsNameQJ[i]) {
                         for (let j in $gameMap._mapBulletsNameQJ[i]) {
                            if (haveAtkList[j]) continue;
                            haveAtkList[j] = true;
                            character = $gameMap.bulletQJ(j);
                            if (character!=this&&character&&(character.QJBody||character.QJBodies)) {
                                let bodyList = character.QJBodies?character.QJBodies:[character.QJBody];
                                for (let QJBody of bodyList) {
                                    QJ.SAT.judge(judgeBody,QJBody);
                                    if (haveRebound) {
                                        if (result.result&&this.JudgeReBound(result,judgeBody,QJBody,detail)) {
                                            if (this.setDead(detail,null,character)) return;
                                        }
                                    } else {
                                        if (result.result) {
                                            if (this.setDead(detail,null,character)) return;
                                        }
                                    }
                                }
                            }
                         }
                    } 
                }
                //=============================================================
            }
        } 
    }
    //=====================================================================
    if (ifPierce) {
        for (let i in this.havePierceCharacters) {
            if (this.havePierceCharacters[i]==1) {
                delete this.havePierceCharacters[i];
                if (this.pierceCharactersOutJS[i]) {
                    let target = QJ.getCharacter(i);
                    eval(this.pierceCharactersOutJS[i]);
                    delete this.pierceCharactersOutJS[i];
                }
            } else {
                this.havePierceCharacters[i] = 1;
            }
        }
    }
    //=====================================================================
};
Game_QJBulletMZ.prototype.getRealExistDataCollisionBox = function(detail) {
    if (!detail.cb) {
        return this.QJBody;
    } else {
        return this.refreshBox(detail.cb);
    }
};
Game_QJBulletMZ.prototype.dealExistDataCollisionBox = function(detail) {
    if (!detail.cb) {
        return this.QJBody;
    } else {
        return this.refreshBox(detail.cb);
    }
};
Game_QJBulletMZ.prototype.startAnimation = function() {
    this._animationPlaying = true;
};
Game_QJBulletMZ.prototype.isAnimationPlaying = function() {
    return this._animationPlaying;
};
Game_QJBulletMZ.prototype.endAnimation = function() {
    this._animationPlaying = false;
};
//=============================================================================
//
//=============================================================================
const spriteParentPointer = isMV ? Sprite_Base : Sprite;
Sprite_QJBulletMZ.prototype = Object.create(spriteParentPointer.prototype);
Sprite_QJBulletMZ.prototype.constructor = Sprite_QJBulletMZ;
Sprite_QJBulletMZ.prototype.initialize = function(index) {
    spriteParentPointer.prototype.initialize.call(this);
    this.data=$gameMap.bulletQJ(index);
    this.z = this.data.data.z;
    this.anim = null;
    this.setColorTone(this.data.data.tone);
    if (isMV) {
        //nothing
    } else {
        this.setHue(this.data.data.hue);
    }
    this.blendMode = this.data.data.blendMode;
    this.updateBaseData();
    this.loadBitmap();
};
Sprite_QJBulletMZ.prototype.setBitmap = function(bitmap) {
    if (!this || !this.data || this.data.deadOver) {
        return;
    }
    bitmap.smooth = false;//像素化放大
    this.bitmap = bitmap;
    let img = this.data.data.img;
    if (typeof img == "string"||img[0]=='P') {
        let name = typeof img == "string"?img:img[1];
        if (!this.data.dynamicBitmap) {
            this.data.buildDynamicBitmap(name,bitmap);
        }
        this.data.setDynamicBitmap(this);
    } else if (img[0]=='I') {
        this.setFrame(img[1]%16*32,Math.floor(img[1]/16)*32,32,32);
    } else if (img[0]=='C') {
        this.setFrame(img[3],img[4],img[5],img[6]);
    } else if (img[0]=='T') {
        //nothing
    }
    this.data.data.bitmapWidth = this.width;
    this.data.data.bitmapHeight = this.height;
};
Sprite_QJBulletMZ.prototype.loadBitmap = function() {
    let img = this.data.data.img;
    if (img==''||!img) {
        return;
    }
    if (typeof img == "string"||img[0]=='P') {
        let name = typeof img == "string"?img:img[1];
        let bitmap = ImageManager.loadProjectileQJ(name, this.data.data.hue);
        if (bitmap&&bitmap.isReady()) {
            this.setBitmap(bitmap);
        } else {
            bitmap.addLoadListener(this.setBitmap.bind(this,bitmap));
        }
    } else if (img[0]=='I') {
        let bitmap = ImageManager.loadSystem('IconSet');
        this.setBitmap(bitmap);
    } else if (img[0]=='C') {
        let bitmap = ImageManager.loadCharacter(img[2]);
        if (bitmap&&bitmap.isReady()) {
            this.setBitmap(bitmap);
        } else {
            bitmap.addLoadListener(this.setBitmap.bind(this,bitmap));
        }
    } else if (img[0]=='T') {
        //['T',1text,2arrangement mode,3text color,4text size,5stroke color,6stroke thickness,7font face]
        let tempCal = Bitmap.measureTextSizeQJ(img[1],img[2],img[4],img[7]);
        let textWidth = tempCal.width;
        let textHeight = tempCal.height;
        let bitmap = new Bitmap(textWidth,textHeight);
        bitmap.fontSize = Number(img[4]);
        bitmap.outlineWidth = Number(img[6]);
        if (typeof img[3] === "object") bitmap.textColor = QJ.colorGrad(bitmap,img[3][0],0,0,textWidth,textHeight,img[3][1]*Math.PI/180);
        else bitmap.textColor = img[3];
        if (typeof img[5] === "object") bitmap.outlineColor = QJ.colorGrad(bitmap,img[5][0],0,0,textWidth,textHeight,img[5][1]*Math.PI/180);
        else bitmap.outlineColor = img[5];
        if (img[7]) bitmap.fontFace = img[7];
        if (img[2]==0) bitmap.drawText(img[1],0,0,textWidth,textHeight,"center");
        else if (img[2]==1) bitmap.drawTextVerticalQJ(img[1],0,0,textWidth,textHeight,"center");
        this.setBitmap(bitmap);
    }
};
Sprite_QJBulletMZ.prototype.updateBaseData = function() {
    this.x=this.data.screenXShowQJ();
    this.y=this.data.screenYShowQJ();
    this.rotation=this.data.rotationImg*Math.PI/180;
    this.scale.x = this.data.scaleX;
    this.scale.y = this.data.scaleY;
    this.alpha=this.data.opacity;
    this.anchor.x=this.data.anchorX;
    this.anchor.y=this.data.anchorY;
    this.data.refreshDynamicBitmap(this);
};
Sprite_QJBulletMZ.prototype.update = function() {
    //========================================
    if (this.data.deadOver) {
        this.destroy();
        return;
    }
    if (this.data.requestAnimationId>0) {
        let spriteset = SceneManager._scene._spriteset;
        if (this.data.isAnimationPlaying()) {
            spriteset.removeAnimation(this.anim);
            this.anim = null;
        }
        if (isMV) {
            this.startAnimation($dataAnimations[Number(this.data.requestAnimationId)], false, 0);
            this.data.startAnimation();
        } else {
            this.anim = spriteset.startAnimationQJ(this.data,this,this.data.requestAnimationId);
        }
        this.data.requestAnimationId = 0;
    }
    if (isMV) {
        if (!this.isAnimationPlaying() && this.data.isAnimationPlaying()) {
            this.data.endAnimation();
        }
        this.updateAnimationSprites();
    }
    this.updateBaseData();
    //========================================
};
//=============================================================================
//
//=============================================================================
Game_QJLaserMZ.prototype.initialize = function(data,index) {
    //==========================================
    this.data=data;
    this.index=index;
    this.bulletMode = 1;
    //==========================================
    this.calculateData();
    //==========================================
};
Game_QJLaserMZ.prototype.calculateData = function() {
    //==========================================
    this.dead=false;
    this.time = 0;
    this.scaleX = 0;
    this.scaleY = 0;
    this.opacity = 0;
    this.havePierceCharacters = {};
    this.pierceCharactersOutJS = {};
    //==========================================
    let existData = this.data.existData[0];
    this.QJBody = null;
    //==========================================
    this.needAdvancedData = this.data.moveJS.length>0||this.data.deadJS||this.data.moveCE.length>0;
    //==========================================
    $gameMap.addMapBulletsNameQJ(this.index,this.data.groupName);
    //==========================================
    this.update(true);
    //==========================================
};
Game_QJLaserMZ.prototype.afterDeal = function() {

}
Game_QJLaserMZ.prototype.screenXQJ = function() {
    return this.x;
}
Game_QJLaserMZ.prototype.screenYQJ = function() {
    return this.y;
}
Game_QJLaserMZ.prototype.screenXShowQJ = function() {
    return this.x - $gameMap.displayX()*tileSize;
}
Game_QJLaserMZ.prototype.screenYShowQJ = function() {
    return this.y - $gameMap.displayY()*tileSize;
}
Game_QJLaserMZ.prototype.inheritX = function() {
    return this.x - $gameMap.displayX()*tileSize;
}
Game_QJLaserMZ.prototype.inheritY = function() {
    return this.y - $gameMap.displayY()*tileSize;
}
Game_QJLaserMZ.prototype.inheritRotation = function() {
    return this.rotation;
}
Game_QJLaserMZ.prototype.screenRotationShowQJ = function() {
    return this.rotation*180/Math.PI;
}
Game_QJLaserMZ.prototype.destroy = function() {
    this.deadOver = true;
    this.data.event = null;
    $gameMap.removeBulletQJ(this.index);
    $gameMap.deleteMapBulletsNameQJ(this.index,this.data.groupName);
};
Game_QJLaserMZ.prototype.updateFadeValue = function() {
    let data = this.data;
    this.opacity = data.opacity.get();
    this.scaleX = data.scaleX.get();
};
Game_QJLaserMZ.prototype.updateJSAndQT = function() {
    Game_QJBulletMZ.prototype.updateJSAndQT.apply(this);
};
Game_QJLaserMZ.prototype.update = function (ifInit) {
    //console.time("bulletUpdate");
    //=======================
    if (this.dead) {
        this.updaeXYR();
        this.updateDead();
        return;
    }
    //=======================
    this.time++;
    this.updateFadeValue();
    this.updaeXYR(ifInit);
    this.updateExistData();
    if (this.needAdvancedData) this.updateJSAndQT();
    //=======================
    //console.timeEnd("bulletUpdate");
};
Game_QJLaserMZ.prototype.updateDead = function(ifWaitAnimation) {
    let deadDeal1 = this.updateImgDeadAnim();
    if (deadDeal1) this.destroy();
}
Game_QJLaserMZ.prototype.updateImgDeadAnim = function() {
    if (this.imgDeadAnimData) {
        let data = this.imgDeadAnimData[3];
        if (data.t>=this.imgDeadAnimData[1]) {
            return true;
        } else {
            data.t++;
            if (data.fadeFun) {this.opacity = data.fadeFun.get();}
            if (data.scaleXFun) {this.scaleX = data.scaleXFun.get();}
            if (data.scaleYFun) {this.scaleY = data.scaleYFun.get();}
            return data.t>=this.imgDeadAnimData[1];
        }
    } else return true;
}
Game_QJLaserMZ.prototype.updaeXYR = function(ifInit) {
    let data = this.data;
    let xyGet = QJ.MPMZ.model[1].posExtra;
    let dx = $gameMap.displayX(),dx48=dx*tileSize;
    let dy = $gameMap.displayY(),dy48=dy*tileSize;
    //==============================================
    if (ifInit||!data.positionStatic) {
        let newPosition = xyGet(JsonEx.makeDeepCopy(data.position),data.event);
        this.x = newPosition[0]+dx48;
        this.y = newPosition[1]+dy48;
    }
    if (ifInit||!data.rotationStatic) {
        this.rotation = QJ.MPMZ.model[1].rotationExtra(JsonEx.makeDeepCopy(data.rotation),data.event,[this.x-dx48,this.y-dy48]);
    }
    //==============================================
    if (data.length[0]=='S') {
        if (typeof data.length[1] != 'object') data.length[1] = new DEFrameQJ(null,data.length[1],0);
        let maxLength = this.dead?data.length[1].getOnly():data.length[1].get();
        let x = this.x,y = this.y,r = this.rotation%360*Math.PI/180;
        this.lineList = [];
        this.lineList.push([x-dx48,y-dy48,r]);
        for (let result,i=data.length[2];i>=0;i--) {
            result = this.getTarGrid(maxLength,data.length[3],r,x/tileSize,y/tileSize);
            if (!result[0]) {
                this.lineList.push([result[1][0]-dx48,result[1][1]-dy48,this.lineList[this.lineList.length-1][2]]);
                break;
            } else {
                maxLength -= result[2];
                result = this.getPixelPosition(result[1][0],result[1][1],dx,dy,x-dx48,y-dy48,r);
                if (result[0]) {
                    this.lineList.push([result[1][0]-dx48,result[1][1]-dy48,result[1][2]]);
                    x = result[1][0];
                    y = result[1][1];
                    r = result[1][2];
                } else {
                    this.lineList.push(this.lineList[this.lineList.length-1]);
                    break;
                }
            }
        }
    } else if (data.length[0]=='D') {
        let startPosition = xyGet([data.length[1],data.length[2]],data.event);
        let endPosition = xyGet([data.length[3],data.length[4]],data.event);
        this.distanceLength = Math.sqrt((startPosition[0]-endPosition[0])*(startPosition[0]-endPosition[0])+
            (startPosition[1]-endPosition[1])*(startPosition[1]-endPosition[1]));
        this.lineList = [startPosition,endPosition];
    }
    //==============================================
    //==============================================
    //==============================================
};
Game_QJLaserMZ.prototype.getTarGrid = function(il,condition,r,ox,oy) {
    //==============================================
    if (condition.length==0) return [false,[Math.floor(ox*tileSize+il*Math.sin(r)),Math.floor(oy*tileSize-il*Math.cos(r))],il];
    let x,y,lastX=-1,lastY=-1;
    let w=Math.sin(r)/tileSize,h=-Math.cos(r)/tileSize,ifPixel=false;
    let jumpDistance = 16;
    for (let i=1;i<=il;i+=ifPixel?1:jumpDistance) {
        x=Math.floor(ox+i*w);
        y=Math.floor(oy+i*h);
        if (lastX==x&&lastY==y) {
            continue;
        } else {
            if (ifPixel||i<=jumpDistance) {
                ifPixel = false;
                lastX=x;
                lastY=y;
            } else {
                i-=jumpDistance-1;
                ifPixel = true;
                continue;
            }
        }
        if (this.getGridCollision(condition,x,y)) {
            return [true,[x,y],i];
        }
    }
    return [false,[Math.floor(ox*tileSize+il*w*tileSize),Math.floor(oy*tileSize+il*h*tileSize)],il];
    //==============================================
};
Game_QJLaserMZ.prototype.getGridCollision = function(detailList,resultX,resultY) {
    //==============================================
    for (let detail of detailList) {
        if (detail[0]=='T') {
            if (detail[1].includes($gameMap.terrainTag(resultX,resultY))) return true; 
        } else if (detail[0]=='R') {
            if (detail[1].includes($gameMap.regionId(resultX,resultY))) return true; 
        } else if (detail[0]=='NP') {
            if (!$gameMap.noPassBoxLaserQJ(resultX,resultY)) return true; 
        }
    }
    return false;
    //==============================================
};
Game_QJLaserMZ.prototype.getPixelPosition = function(x,y,dx,dy,ox,oy,or) {
    x=(x-dx)*tileSize+tileSize/2;
    y=(y-dy)*tileSize+tileSize/2;
    let k=Math.tan(or-Math.PI/2);
    let b=oy-k*ox;
    let judgeLsit;
    let halfSize = tileSize/2;
    if (ox<=x+halfSize&&ox>=x-halfSize) {
        if (oy<y) judgeLsit=[8];
        else judgeLsit=[2];
    } else if (oy<=y+halfSize&&oy>=y-halfSize) {
        if (ox<x) judgeLsit=[4];
        else judgeLsit=[6];
    } else if (ox<x-halfSize&&oy<y-halfSize) {
        judgeLsit=[4,8];
    } else if (ox>x+halfSize&&oy<y-halfSize) {
        judgeLsit=[6,8];
    } else if (ox<x-halfSize&&oy>y+halfSize) {
        judgeLsit=[2,4];
    } else if (ox>x+halfSize&&oy>y+halfSize) {
        judgeLsit=[2,6];
    } else {
        return [false];
    }
    let tx=-1,ty=-1,ro;
    for (let d=0;d<judgeLsit.length;d++) {
        if (judgeLsit[d]==2) {
            ty=y+halfSize;
            tx=(ty-b)/k;
            ro=Math.PI-or;
            if (Math.abs(tx-x)<=halfSize) break;
        } else if (judgeLsit[d]==4) {
            tx=x-halfSize;
            ty=k*tx+b;
            ro=2*Math.PI-or;
            if (Math.abs(ty-y)<=halfSize) break;
        } else if (judgeLsit[d]==6) {
            tx=x+halfSize;
            ty=k*tx+b;
            ro=2*Math.PI-or;
            if (Math.abs(ty-y)<= halfSize) break;
        } else if (judgeLsit[d]==8) {
            ty=y-halfSize;
            tx=(ty-b)/k;
            ro=Math.PI-or;
            if (Math.abs(tx-x)<=halfSize) break;
        }
    }
    return [true,[Math.round(tx+dx*tileSize),Math.round(ty+dy*tileSize),ro]];
};
Game_QJLaserMZ.prototype.setDead = function(data,target = null,bulletTarget = null) {
    //==============================================
    if (!data) {
        this.destroy();
        this.dead = true;
        return true;
    } else {
        if (this.data.judgeMode[0] == 'T'&&target) {
            let tempId = QJ.buildCharacter(target);
            if (this.havePierceCharacters[tempId]) {
                this.havePierceCharacters[tempId] = 2;
                return false;
            }
        }
        //==============================================
        if (data.d) {
            if (data.d[0]==0) {
                if (data.d.length==2) {
                    data.d.push(null);
                    data.d.push({t:0,
                        fadeFun:new DEFrameQJ(null,'0|'+this.opacity+'~'+data.d[1]+'/0',0)});
                }
            } else if (data.d[0]==1) {
                if (data.d.length==3) {
                    data.d.push({t:0,
                        fadeFun:new DEFrameQJ(null,'0|'+this.opacity+'~'+data.d[1]+'/0',0),
                        scaleXFun:new DEFrameQJ(null,'0|'+this.scaleX+'~'+data.d[1]+'/'+(this.scaleX*data.d[2]),0),
                        scaleYFun:new DEFrameQJ(null,'0|'+this.scaleY+'~'+data.d[1]+'/'+(this.scaleY*data.d[2]),0)});
                }
            }
            this.imgDeadAnimData = data.d;
        }
        if (data.a) {
            if (data.p[0]<=0||(data.p[0]>0&&data.p[2])) {
                this.dealAction(data.a,target,bulletTarget);
            }
        }
        //==============================================
    }
    //==============================================
    if (data.p[0]==0) {
        this.dead = true;
        return true;
    } else {
        if (target&&(data.t[0]=='G'||data.t[0]=='P')) {
            if (this.data.judgeMode[0] == 'T') {
                let index = QJ.buildCharacter(target);
                this.havePierceCharacters[index] = 2;
                if (data.p[3]) {
                    eval(data.p[3]);
                }
                if (data.p[4]) {
                    this.pierceCharactersOutJS[index] = data.p[4];
                }
            }
            data.p[0]--;
        }
        return false;
    }
    //==============================================
};
Game_QJLaserMZ.prototype.dealAction = function(actionData,target = null,bulletTarget = null) {
    Game_QJBulletMZ.prototype.dealAction.apply(this,arguments);
}
Game_QJLaserMZ.prototype.updateExistData = function() {
    let data = this.data;
    let judgeWidth = data.judgeWidth.get()*this.scaleX;
    let dx48 = $gameMap.displayX()*tileSize;
    let dy48 = $gameMap.displayY()*tileSize;
    if (data.length[0]=='S') {
        this.QJBodies = [];
        for (let idata=this.lineList,il=idata.length-1,detail,detailNext,i=0,timefirst=true,body;i<il;i++) {
            detail = idata[i];
            detailNext = idata[i+1];
            let lll = Math.sqrt((detail[0]-detailNext[0])*(detail[0]-detailNext[0])+
                (detail[1]-detailNext[1])*(detail[1]-detailNext[1]));
            body = QJ.SAT.box((detail[0]+detailNext[0])/2+dx48,(detail[1]+detailNext[1])/2+dy48,['R',judgeWidth,lll]);
            body.setAngle(detail[2]);
            this.QJBodies.push(body);
        }
    } else if (data.length[0]=='D') {
        let r = this.rotation*Math.PI/180;
        let lll = this.distanceLength;
        this.QJBody = QJ.SAT.box((this.x+lll*Math.sin(r)/2),(this.y-lll*Math.cos(r)/2),['R',judgeWidth,lll]);
        this.QJBody.setAngle(r);
    }
    if (data.judgeMode[0] == 'W') {//先处理时间有关的，然后再管敌人
        if (data.length[0]=='S') {
            for (let idata=this.lineList,il=idata.length-1,detail,detailNext,i=0,timefirst=true;i<il;i++) {
                this.QJBody = this.QJBodies[i];
                Game_QJBulletMZ.prototype.updateExistData.call(this,false,false,timefirst,false,false);
                if (this.dead) return;
                timefirst = false;
            }
        } else if (data.length[0]=='D') {
            Game_QJBulletMZ.prototype.updateExistData.call(this,false,false,true,false,false);
        }
        if (data.judgeMode[2]==0) {
            data.judgeMode[2] = data.judgeMode[1];
        } else {
            data.judgeMode[2]--;
            return;
        }
        if (data.length[0]=='S') {
            for (let idata=this.lineList,il=idata.length-1,detail,detailNext,i=0;i<il;i++) {
                this.QJBody = this.QJBodies[i];
                Game_QJBulletMZ.prototype.updateExistData.call(this,false,false,false,false,true);
                if (this.dead) return;
            }
        } else if (data.length[0]=='D') {
            Game_QJBulletMZ.prototype.updateExistData.call(this,false,false,false,false,true);
        }
    } else if (data.judgeMode[0] == 'T') {
        if (data.length[0]=='S') {
            for (let idata=this.lineList,il=idata.length-1,detail,detailNext,i=0,timefirst=true;i<il;i++) {
                this.QJBody = this.QJBodies[i];
                Game_QJBulletMZ.prototype.updateExistData.call(this,false,false,timefirst,false,true);
                if (this.dead) return;
                timefirst = false;
            }
        } else if (data.length[0]=='D') {
            Game_QJBulletMZ.prototype.updateExistData.call(this,false,false,true,false,true);
        }
    }
    if (data.judgeMode[0] == 'T') {
        for (let i in this.havePierceCharacters) {
            if (this.havePierceCharacters[i]==1) {
                delete this.havePierceCharacters[i];
                if (this.pierceCharactersOutJS[i]) {
                    let target = QJ.getCharacter(i);
                    eval(this.pierceCharactersOutJS[i]);
                    delete this.pierceCharactersOutJS[i];
                }
            } else {
                this.havePierceCharacters[i] = 1;
            }
        }
    }
};
Game_QJLaserMZ.prototype.getRealExistDataCollisionBox = function(detail) {
    return Game_QJBulletMZ.prototype.getRealExistDataCollisionBox.apply(this,arguments);
};
Game_QJLaserMZ.prototype.dealExistDataCollisionBox = function(detail) {
    return Game_QJBulletMZ.prototype.dealExistDataCollisionBox.apply(this,arguments);
};
//=============================================================================
//
//=============================================================================
Sprite_QJLaserMZ.prototype = Object.create(spriteParentPointer.prototype);
Sprite_QJLaserMZ.prototype.constructor = Sprite_QJLaserMZ;
Sprite_QJLaserMZ.prototype.initialize = function(index) {
    spriteParentPointer.prototype.initialize.call(this);
    this.data=$gameMap.bulletQJ(index);
    this.z = this.data.data.z;
    this.blendMode = this.data.data.blendMode;
    this.loadBitmapWait = 2;
    this.bitmaps = [];
    this.loadBitmap();
};
Sprite_QJLaserMZ.prototype.loadBitmap = function() {
    let img = ImageManager.loadProjectileQJ(this.data.data.img);
    this.bitmaps.push(img);
    if (img&&!img.isReady()) {
        let frameImage=this.data.data.img.match(/\[[^\]]*\]/i);
        if (frameImage){
            let data=eval(frameImage[0]);
            img.addLoadListener((bit)=>{
                if (data.length==2) {
                    this.dymaticBitmap1=[0,Number(data[0])*1,0,Number(data[1]),Number(data[0]),bit.width/Number(data[0]),bit.height/1];
                } else if (data.length==3) {
                    this.dymaticBitmap1=[0,Number(data[0])*Number(data[1]),0,Number(data[2]),Number(data[0]),bit.width/Number(data[0]),bit.height/Number(data[1])];
                }
                this.loadBitmapWait--;
            });
        } else {
            img.addLoadListener(()=>{this.loadBitmapWait--;});
        }
    } else {
        let frameImage=this.data.data.img.match(/\[[^\]]*\]/i);
        if (frameImage) {
            let data=eval(frameImage[0]);
            if (data.length==2) {
                this.dymaticBitmap1=[0,Number(data[0])*1,0,Number(data[1]),Number(data[0]),img.width/Number(data[0]),img.height/1];
            } else if (data.length==3) {
                this.dymaticBitmap1=[0,Number(data[0])*Number(data[1]),0,Number(data[2]),Number(data[0]),img.width/Number(data[0]),img.height/Number(data[1])];
            }
        }
        this.loadBitmapWait--;
    }
    if (this.data.data.imgPoint) {
        this.havePoint = true;
        img = ImageManager.loadProjectileQJ(this.data.data.imgPoint);
        this.bitmaps.push(img);
        if (img&&!img.isReady()) {
            let frameImage=this.data.data.imgPoint.match(/\[[^\]]*\]/i);
            if (frameImage){
                let data=eval(frameImage[0]);
                img.addLoadListener((bit)=>{
                if (data.length==2) {
                    this.dymaticBitmap2=[0,Number(data[0])*1,0,Number(data[1]),Number(data[0]),bit.width/Number(data[0]),bit.height/1];
                } else if (data.length==3) {
                    this.dymaticBitmap2=[0,Number(data[0])*Number(data[1]),0,Number(data[2]),Number(data[0]),bit.width/Number(data[0]),bit.height/Number(data[1])];
                }
                    this.loadBitmapWait--;
                });
            } else {
                img.addLoadListener(()=>{this.loadBitmapWait--;});
            }
        } else {
            this.loadBitmapWait--;
        }
    } else {
        let frameImage=this.data.data.imgPoint.match(/\[[^\]]*\]/i);
        if (frameImage) {
            let data=eval(frameImage[0]);
            if (data.length==2) {
                this.dymaticBitmap2=[0,Number(data[0])*1,0,Number(data[1]),Number(data[0]),img.width/Number(data[0]),img.height/1];
            } else if (data.length==3) {
                this.dymaticBitmap2=[0,Number(data[0])*Number(data[1]),0,Number(data[2]),Number(data[0]),img.width/Number(data[0]),img.height/Number(data[1])];
            }
        }
        this.havePoint = false;
        this.loadBitmapWait--;
    }
};
Sprite_QJLaserMZ.prototype.refresDymaticBitmap = function(dB) {
    dB[2]++;
    if (dB[2]==dB[3]) {
        dB[2]=0;
        dB[0]++;
        if (dB[0]==dB[1]) dB[0]=0;
        return true;
    }
    return false;
}
Sprite_QJLaserMZ.prototype.update = function() {
    //========================================
    if (this.data.deadOver) {
        this.destroy();
        return;
    }
    if (this.loadBitmapWait>0) return;
    this.updateData();
    //========================================
};
Sprite_QJLaserMZ.prototype.updateData = function() {
    //========================================
    let refreshDB1=false,refreshDB2=false;
    if (this.dymaticBitmap1) {
        refreshDB1 = this.refresDymaticBitmap(this.dymaticBitmap1);
    }
    if (this.dymaticBitmap2) {
        refreshDB2 = this.refresDymaticBitmap(this.dymaticBitmap2);
    }
    let drl = this.dymaticBitmap1;
    let drp = this.dymaticBitmap2;
    //========================================
    if (this.data.data.length[0]=='S') {
        //========================================
        let ifTile = this.data.data.imgStretchMode=='T';
        if (!this.lineList) {
            if (this.dymaticBitmap1) refreshDB1 = true;
            if (this.dymaticBitmap2) refreshDB2 = true;
            let tone = this.data.data.tone;
            this.lineList = [];
            this.pointList = [];
            let bm=this.data.data.blendMode;
            for (let i=0,bit1,bit2,il=Math.max(0,this.data.data.length[2]);i<=il;i++) {
                bit1 = new (ifTile?TilingSprite:Sprite)(this.bitmaps[0]);
                bit2 = new Sprite(this.bitmaps[1]);
                bit1.blendMode = bm;
                bit2.blendMode = bm;
                if (!ifTile) bit1.setColorTone(tone);
                bit2.setColorTone(tone);
                bit1.anchor.x=0.5;
                bit1.anchor.y=1;
                bit2.anchor.x=0.5;
                bit2.anchor.y=0.5;
                this.lineList.push(bit1);
                this.pointList.push(bit2);
                this.addChild(bit1);
                this.addChild(bit2);
            }
            let bit = new Sprite(this.bitmaps[1]);
            bit.blendMode = bm;
            bit.setColorTone(tone);
            bit.anchor.x=0.5;
            bit.anchor.y=0.5;
            this.pointList.push(bit);
            this.addChild(bit);
        }
        //========================================
        let scaleX = this.data.scaleX;
        let alpha = this.data.opacity;
        let ll = this.data.lineList;
        //========================================
        for (let i=0,bit1,bit2,il=this.data.data.length[2],lll=ll.length;i<=il+1;i++) {
            //==========================
            bit1 = this.lineList[i];
            bit2 = this.pointList[i];
            //==========================
            if (bit1) {
                if (i<lll-1) {
                    bit1.visible = true;
                    if (ifTile) {
                        if (refreshDB1) {
                            bit1.setFrame((drl[0]%drl[4])*drl[5],Math.floor(drl[0]/drl[4])*drl[6],drl[5],drl[6]);
                        }
                        bit1.move(0, 0, drl[5],Math.floor(Math.sqrt(
                            (ll[i][0]-ll[i+1][0])*(ll[i][0]-ll[i+1][0])+
                            (ll[i][1]-ll[i+1][1])*(ll[i][1]-ll[i+1][1]))));
                    } else {
                        if (refreshDB1) {
                            bit1.setFrame((drl[0]%drl[4])*drl[5],Math.floor(drl[0]/drl[4])*drl[6],drl[5],drl[6]);
                            bit1.scale.y = Math.sqrt(
                                (ll[i][0]-ll[i+1][0])*(ll[i][0]-ll[i+1][0])+
                                (ll[i][1]-ll[i+1][1])*(ll[i][1]-ll[i+1][1])
                            )/drl[6];
                        } else {
                            bit1.scale.y = Math.sqrt(
                                (ll[i][0]-ll[i+1][0])*(ll[i][0]-ll[i+1][0])+
                                (ll[i][1]-ll[i+1][1])*(ll[i][1]-ll[i+1][1]))/this.bitmaps[0].height;
                        }
                    }
                    bit1.x = ll[i][0];
                    bit1.y = ll[i][1];
                    bit1.rotation = ll[i][2];
                    bit1.scale.x = scaleX;
                    bit1.alpha = alpha;
                } else {
                    bit1.visible = false;
                }
            }
            //==========================
            if (bit2) {
                if (i<lll) {
                    bit2.visible = true;
                    bit2.x = ll[i][0];
                    bit2.y = ll[i][1];
                    if (refreshDB2) bit2.setFrame(drp[0],drp[1],drp[2],drp[3]);
                    bit2.scale.x = scaleX;
                    bit2.scale.y = scaleX;
                    bit2.rotation = ll[i][2];
                    bit2.alpha = alpha;
                } else {
                    bit2.visible = false;
                }
            }
            //==========================
        }
        //========================================
    } else if (this.data.data.length[0]=='D') {
        let ifTile = this.data.data.imgStretchMode=='T';
        let bm=this.data.data.blendMode;
        let sprite;
        let tone = this.data.data.tone;
        if (!this.lineList) {
            if (this.dymaticBitmap1) refreshDB1 = true;
            if (this.dymaticBitmap2) refreshDB2 = true;
            this.lineList = [];
            sprite = new (ifTile?TilingSprite:Sprite)(this.bitmaps[0]);
            sprite.anchor.x=0.5;
            sprite.anchor.y=1;
            sprite.blendMode = bm;
            if (!ifTile) sprite.setColorTone(tone);
            this.lineList.push(sprite);
            this.addChild(sprite);
            sprite = new Sprite(this.bitmaps[1]);
            sprite.anchor.x=0.5;
            sprite.anchor.y=0.5;
            sprite.blendMode = bm;
            if (!ifTile) sprite.setColorTone(tone);
            this.lineList.push(sprite);
            this.addChild(sprite);
            sprite = new Sprite(this.bitmaps[1]);
            sprite.anchor.x=0.5;
            sprite.anchor.y=0.5;
            sprite.blendMode = bm;
            if (!ifTile) sprite.setColorTone(tone);
            this.lineList.push(sprite);
            this.addChild(sprite);
        }
        let scaleX = this.data.scaleX;
        let alpha = this.data.opacity;
        let x = this.data.screenXShowQJ();
        let y = this.data.screenYShowQJ();
        let r = this.data.rotation*Math.PI/180;
        let l = this.data.distanceLength;
        for (let i=0;i<3;i++) {
            sprite = this.lineList[i];
            if (i==0) {
                if (refreshDB1) sprite.setFrame((drl[0]%drl[4])*drl[5],Math.floor(drl[0]/drl[4])*drl[6],drl[5],drl[6]);
            } else {
                if (refreshDB2) sprite.setFrame((drp[0]%drp[4])*drp[5],Math.floor(drp[0]/drp[4])*drp[6],drp[5],drp[6]);
            }
            if (i==0) {
                if (ifTile) {
                    sprite.move(0, 0, drl[5], l);
                } else {
                    if (refreshDB1) {
                        sprite.scale.y = l/drl[6];
                    } else {
                        sprite.scale.y = l/this.bitmaps[0].height;
                    }
                }
            } else {
                sprite.scale.y = scaleX;
            }
            sprite.x = i==2?(x+l*Math.sin(r)):x;
            sprite.y = i==2?(y-l*Math.cos(r)):y;
            sprite.rotation = r;
            sprite.scale.x = scaleX;
            sprite.alpha = alpha;
        }
    }
    //========================================
    //========================================
    //========================================
    //========================================
};
//=============================================================================
//
//=============================================================================
let particleTexture = QJ.particleTexture = {};
//=============================================
Sprite_ProjectileContainerQJMZ.prototype = Object.create(Sprite.prototype);
Sprite_ProjectileContainerQJMZ.prototype.constructor = Sprite_ProjectileContainerQJMZ;
Sprite_ProjectileContainerQJMZ.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this.particleContainers={};
    this.onlyEffectSprites = [];
}
Sprite_ProjectileContainerQJMZ.prototype.update = function() {
    if (this.bitmap) this.bitmap.clear();
    let pointer = null;
    this.children.forEach((child)=>{
        if (child.update) {
            child.update();
        }
        pointer = child.data;
        if (pointer) {
            if (!pointer.deadOver) {
                if (pointer.data.afterImage) {
                    this.drawAfterImage(child);
                }
                if (pointer.data.particles&&pointer.data.particles.length>0) {
                    this.updateParticle(child);
                }
            }
        }
    });
    if (this.onlyEffectSprites.length>0) {
        this.onlyEffectSprites.forEach((child)=>{
            pointer = child.data;
            if (pointer) {
                if (pointer.deadOver) {
                    this.removeOnlyEffectChild(child);
                } else {
                    if (pointer.data.afterImage) {
                        this.drawAfterImage(child);
                    }
                    if (pointer.data.particles&&pointer.data.particles.length>0) {
                        this.updateParticle(child);
                    }
                }
            }
        });
    }
};
Sprite_ProjectileContainerQJMZ.prototype.addOnlyEffectChild = function(child) {
    this.onlyEffectSprites.push(child);
};
Sprite_ProjectileContainerQJMZ.prototype.removeOnlyEffectChild = function(child) {
    this.onlyEffectSprites.splice(this.onlyEffectSprites.indexOf(child),1);
};
Sprite_ProjectileContainerQJMZ.prototype.drawAfterImage = function(child) {
    if (!this.bitmap) {
        this.bitmap = new Bitmap(Graphics.width+QJ.tileSize*2,Graphics.height+QJ.tileSize*2);
    }
    let data = child.data.data.afterImage;
    let remData = child.data.dataRem,width;
    let ctx = this.bitmap._context;
    let posX = -$gameMap.displayX()*QJ.tileSize;
    let posY = -$gameMap.displayY()*QJ.tileSize;
    for (let i=0,iDelay=0,il=data[2],detail,detailLast;i+iDelay<il;i++) {
        detail = remData[remData.length-1-i];
        detailLast = remData[remData.length-1-i-1];
        if (detail&&detailLast&&remData[i+iDelay]) {
            if (detail.x==detailLast.x&&detail.y==detailLast.y) iDelay++;
            ctx.save();
            ctx.translate(detail.x+posX,detail.y+posY);
            if (!detail.ro) {
                detail.ro = QJ.calculateAngleByTwoPoint(detail.x,detail.y,detailLast.x,detailLast.y);
            }
            ctx.rotate(detail.ro);
            ctx.fillStyle = data[0].getTar(i+iDelay);
            ctx.globalAlpha = data[1].getTar(i+iDelay)*child.alpha;
            width = data[3].getTar(i+iDelay);
            if (!detail.dis) {
                detail.dis = Math.sqrt((detail.x-detailLast.x)*(detail.x-detailLast.x)+
                (detail.y-detailLast.y)*(detail.y-detailLast.y));
            }
            ctx.fillRect(-width/2,0,width,detail.dis);
            ctx.restore();
        } else {
            break;
        }
    }
};
Sprite_ProjectileContainerQJMZ.prototype.addChildrenAtId = function(name,sprite,pos = 0) {
    if (this.particleContainers[name]) {
        this.particleContainers[name].addChild(sprite);
    } else{
        let newContainer=new Sprite_ParticleContainerQJMZ();
        this.addChildAt(newContainer,pos);
        this.particleContainers[name]=newContainer;
        newContainer.addChild(sprite);
    }
};
Sprite_ProjectileContainerQJMZ.prototype.updateParticle = function(child) {
    let particleData = child.data.data.particles;
    let opacity,scaleX,scaleY;
    let dx = $gameMap.displayX(),dx48=dx*tileSize;
    let dy = $gameMap.displayY(),dy48=dy*tileSize;
    let math = Math;
    for (let i of particleData) {
        if (i.count==0) {
            if (particleTexture[i.img]) {
                if (i.intervalTime>0) {
                    i.count = i.intervalTime;
                    for (let k=0,kl=i.bundleNumber;k<kl;k++) {
                        this.addChildrenAtId(i.img,new Sprite_QJParticleMZ(child,this.calculateParticleData(i,math)));
                    }
                } else if (i.intervalTime<0) {
                    let nowData = child.data.remDataGet(0),lastData;
                    if (i.lastRemXy) {
                        lastData = i.lastRemXy;
                    } else {
                        lastData = child.data.remDataGet(-1);
                    }
                    if (nowData&&lastData) {
                        let sx = lastData.x-dx48;
                        let sy = lastData.y-dy48;
                        let ex = nowData.x-dx48;
                        let ey = nowData.y-dy48;
                        let er = child.data.rotationMove*math.PI/180;
                        let x = sx;
                        let y = sy;
                        for (let j=0,jl=math.max(math.abs(sx-ex),math.abs(sy-ey))/(-i.intervalTime),xd=(ex-sx)/jl,yd=(ey-sy)/jl;j<jl;j++) {
                            for (let k=0,kl=i.bundleNumber;k<kl;k++) {
                                this.addChildrenAtId(i.img,new Sprite_QJParticleMZ({
                                    x:x,
                                    y:y,
                                    rotation:er
                                },this.calculateParticleData(i,math)));
                            }
                            x+=xd;
                            y+=yd;
                        }
                        i.lastRemXy = {x:x+dx48,y:y+dy48};
                    }
                }
            } else {
                let bit = ImageManager.loadProjectileQJ(i.img);
                if (bit.isReady()) QJ.createTexture(bit,i.img,particleTexture);
            }
        } else {
            i.count--;
        }
    }
};
Sprite_ProjectileContainerQJMZ.prototype.calculateParticleData = function(i,math) {
    let sx = math.floor((math.random()*(i.scaleXMax-i.scaleXMin)+i.scaleXMin)*100)/100;
    let tarData = {
        img:i.img,
        offset:[],
        existTime:i.existTime,
        disappearTime:i.disappearTime,
        disappearScale:i.disappearScale,
        opacity:math.floor((math.random()*(i.opacityMax-i.opacityMin)+i.opacityMin)*100)/100,
        scaleX:sx,
        scaleY:i.synScale?sx:(math.floor((math.random()*(i.scaleYMax-i.scaleYMin)+i.scaleYMin)*100)/100),
        moveType:[i.moveType[0],i.moveType[1]],
        anchorX:i.anchorX,
        anchorY:i.anchorY
    };
    tarData.offset.push((typeof i.offset[0] == 'string'?eval(i.offset[0]):i.offset[0])+
        math.floor((math.random()*(i.offsetMax[0]-i.offsetMin[0])+i.offsetMin[0])*100)/100);
    tarData.offset.push((typeof i.offset[1] == 'string'?eval(i.offset[1]):i.offset[1])+
        math.floor((math.random()*(i.offsetMax[1]-i.offsetMin[1])+i.offsetMin[1])*100)/100);
    tarData.offset.push(((typeof i.offset[2] == 'string'?eval(i.offset[2]):i.offset[2])+
        math.floor((math.random()*(i.offsetMax[2]-i.offsetMin[2])+i.offsetMin[2])*100)/100)*math.PI/180);
    return tarData;
};
//=============================================================================
//
//=============================================================================
const particleParentPointer = isMV ? PIXI.particles.ParticleContainer : PIXI.ParticleContainer;
Sprite_ParticleContainerQJMZ.prototype = Object.create(particleParentPointer.prototype);
Sprite_ParticleContainerQJMZ.prototype.constructor = Sprite_ParticleContainerQJMZ;
Sprite_ParticleContainerQJMZ.prototype.initialize = function() {
    particleParentPointer.call(this,10000,{
        rotation:true,
        scale:true,
        alpha:true,
        uvs:true
    });
};
Sprite_ParticleContainerQJMZ.prototype.destroy = function() {
    particleParentPointer.prototype.destroy.call(this,{
        children: true
    });
};
Sprite_ParticleContainerQJMZ.prototype.update = function() {
    for (let data=this.children,il=data.length,i=0,child;i<il;i++) {
        child = data[i];
        child.update();
        if (child!=data[i]) {
            i--;
            il--;
        }
    }
};
//=============================================================================
//
//=============================================================================
Sprite_QJParticleMZ.prototype = Object.create(PIXI.Sprite.prototype);
Sprite_QJParticleMZ.prototype.constructor = Sprite_QJParticleMZ;
Sprite_QJParticleMZ.prototype.initialize = function(parent,data) {
    this.data = data;
    let baseTexture = particleTexture[data.img];
    PIXI.Sprite.call(this,new PIXI.Texture(baseTexture,new PIXI.Rectangle(0,0,0,0)));
    this.anchor.set(data.anchorX,data.anchorY);
    this.rotation = parent.rotation+data.offset[2];
    this._x=parent.x+data.offset[0]*Math.cos(parent.rotation)-data.offset[1]*Math.sin(parent.rotation)+$gameMap.displayX()*tileSize;
    this._y=parent.y+data.offset[1]*Math.cos(parent.rotation)-data.offset[0]*Math.sin(parent.rotation)+$gameMap.displayY()*tileSize;
    this.opacity = data.opacity;
    this.time = data.existTime+data.disappearTime;
    this.scale = new PIXI.ObservablePoint(null,null,data.scaleX,data.scaleY);
    this.alpha = this.opacity;
    let frameImage=data.img.match(/\[[^\]]*\]/i);
    if (frameImage){
        let data=eval(frameImage[0]);
        if (data.length==2) {
            this.dymaticBitmap=[0,Number(data[0])*1,0,Number(data[1]),Number(data[0]),baseTexture.width/Number(data[0]),baseTexture.height/1];
        } else if (data.length==3) {
            this.dymaticBitmap=[0,Number(data[0])*Number(data[1]),0,Number(data[2]),Number(data[0]),baseTexture.width/Number(data[0]),baseTexture.height/Number(data[1])];
        }
        let dB = this.dymaticBitmap;
        this.setFrame((dB[0]%dB[4])*dB[5],Math.floor(dB[0]/dB[4])*dB[6],dB[5],dB[6]);
    } else {
        this.setFrame(0,0,baseTexture.width,baseTexture.height);
    }
    this.update();
};
Sprite_QJParticleMZ.prototype.setFrame = function(x,y,w,h) {
    this._texture.frame = new PIXI.Rectangle(Math.floor(x),Math.floor(y),Math.floor(w),Math.floor(h));
};
Sprite_QJParticleMZ.prototype.update = function() {
    this.time--;
    if (this.time<=0) {
        this.destroy();
        return;
    } else if (this.time<=this.data.disappearTime) {
        if (!this.fadeList) {
            this.fadeList = [];
            let disTime = this.data.disappearTime;
            let disScale = this.data.disappearScale;
            this.fadeList.push(new DEFrameQJ(null,'0|'+this.alpha+'~'+  disTime+'/0',0));
            this.fadeList.push(new DEFrameQJ(null,'0|'+this.scale.x+'~'+disTime+'/'+(this.scale.x*disScale),0));
            this.fadeList.push(new DEFrameQJ(null,'0|'+this.scale.y+'~'+disTime+'/'+(this.scale.y*disScale),0));
        }
        this.alpha = this.fadeList[0].get();
        this.scale.x = this.fadeList[1].get();
        this.scale.y = this.fadeList[2].get();
    }
    let data = this.data,r=this.rotation,m=this.data.moveType;
    let t = data.existTime+data.disappearTime-this.time;
    let xL = -1*Number(eval(m[0]));
    let yL = Number(eval(m[1]));
    this.x=xL*Math.sin(r)+ yL*Math.sin(r+Math.PI/2)+this._x-$gameMap.displayX()*tileSize;
    this.y=-xL*Math.cos(r)-yL*Math.cos(r+Math.PI/2)+this._y-$gameMap.displayY()*tileSize;
    if (this.dymaticBitmap) {
        let dB = this.dymaticBitmap;
        dB[2]++;
        if (dB[2]==dB[3]) {
            dB[2]=0;
            dB[0]++;
            if (dB[0]==dB[1]) dB[0]=0;
            this.setFrame((dB[0]%dB[4])*dB[5],Math.floor(dB[0]/dB[4])*dB[6],dB[5],dB[6]);
        }
    }
};
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
//=============================================================================
//
//=============================================================================
if (eval(parameters.canShowBox)) {
    $.Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
    Spriteset_Map.prototype.createLowerLayer = function() {
        $.Spriteset_Map_createLowerLayer.apply(this,arguments);
        this._collisionBoxSpriteQJMZ = new Sprite_CollisiobBoxQJ();
        this.addChild(this._collisionBoxSpriteQJMZ);
    };
}
//=============================================================================
//
//=============================================================================
let showBox = eval(parameters.showBox);
//==================================================
function Sprite_CollisiobBoxQJ() {
    this.initialize.apply(this, arguments);
}
Sprite_CollisiobBoxQJ.prototype = Object.create(Sprite.prototype);
Sprite_CollisiobBoxQJ.prototype.constructor = Sprite_CollisiobBoxQJ;
Sprite_CollisiobBoxQJ.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this.visible = showBox;
    this.bitmap = new Bitmap(Graphics.width,Graphics.height);
    this.bitmap.paintOpacity = 80;
    QJ.MPMZ.sprite = this;
};
Sprite_CollisiobBoxQJ.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if (Input.isTriggered(editKey)) {
        showBox=!showBox;
        this.bitmap.clear();
        this.visible = showBox;
    }
    if (this.visible) {
        this.bitmap.clear();
        let dx = -$gameMap.displayX()*tileSize;
        let dy = -$gameMap.displayY()*tileSize;
        if ($gamePlayer._boxBodyQJ) {
            this.drawBody($gamePlayer._boxBodyQJ,this.bitmap._context,dx,dy,'#ff0000');
        }
        for (let i=0,el=$gameMap._events,ell=el.length;i<ell;i++) {
            if (!el[i]||!el[i]._boxBodyQJ) continue;
            this.drawBody(el[i]._boxBodyQJ,this.bitmap._context,dx,dy,'#ff0000');
        }
        for (let i in $gameMap._mapBulletsQJ) {
            let detail = $gameMap._mapBulletsQJ[i];
            if (!detail||!detail.QJBody) continue;
            this.drawBody(detail.QJBody,this.bitmap._context,dx,dy);
        }
    }
};
//QJ.MPMZ.sprite.aBody(body);
Sprite_CollisiobBoxQJ.prototype.aBody = function(body) {
    this.bitmap.clear();
    let dx = -$gameMap.displayX()*tileSize;
    let dy = -$gameMap.displayY()*tileSize;
    this.drawBody(body,this.bitmap._context,dx,dy);
};
Sprite_CollisiobBoxQJ.prototype.drawBodies = function(list,c,dx,dy,color) {
    for (let i of list) {
        if (i) {
            this.drawBody(i,c,dx,dy,color);
        }
    }
};
Sprite_CollisiobBoxQJ.prototype.drawBody = function(body,c,dx,dy,color) {
    let posX = body.pos.x+dx,posY = body.pos.y+dy;
    c.beginPath();
    if (body.type==0) {//Circle 
        c.arc(posX+body.offset.x,posY+body.offset.y,body.r,0,2*Math.PI);
    } else if (body.type==1) {//Rectangle
        let bounds = body.calcPoints;
        c.moveTo(bounds[0].x+posX,bounds[0].y+posY);
        for (let j=1,jl=bounds.length;j<jl;j++) {
            c.lineTo(bounds[j].x+posX,bounds[j].y+posY);
        }
        c.lineTo(bounds[0].x+posX,bounds[0].y+posY);
    }
    c.closePath();
    c.fillStyle = color?color:(body.color?body.color:"#00FF00");
    c.fill();
    c.lineWidth = 2;
    c.strokeStyle = "#000000";
    c.stroke();
};
//=============================================================================
//Game_Map
//=============================================================================
$.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    this._groupListQJ = {};
    this.initProjectileDataQJ();
    this._gridBodyQJ = QJ.SAT.box(0,0,['R',tileSize,tileSize])
    $.Game_Map_setup.apply(this,arguments);
    this.refreshMapBoxQJ();
    this.refreshUpdateBoxDataQJ();
};
Game_Map.prototype.initProjectileDataQJ = function() {
    this._mapBulletsQJ = {};
    this._mapBulletsNameQJ = {};
    this._mapBulletsQJLength = 0;
}
Game_Map.prototype.refreshUpdateBoxDataQJ = function() {
    let newNumber = ++this._noPassIndexLaserNowQJ;
    this._groupListQJ = {};
    for (let i=0,idata=$gameMap.events(),il=idata.length,event;i<il;i++) {
        event = idata[i];
        if (event&&event._groupListQJ.length>0) {
            for (let j of event._groupListQJ) {
                if (!this._groupListQJ[j]) {
                    this._groupListQJ[j] = [];
                }
                this._groupListQJ[j].push(event.eventId());
            }
        }
        if (event.laserObstacle) {
            this._noPassBoxQJLaser[Math.floor(i.x+0.5)][Math.floor(i.y+0.5)] = newNumber;
        }
    }
}
Game_Map.prototype.updateProjectilesQJ = function() {
    //====================================
    this.refreshUpdateBoxDataQJ();
    //====================================
    //console.time("allTime");
    for (let i in this._mapBulletsQJ) {
        let detail = this._mapBulletsQJ[i];
        if (detail) {
            detail.update();
        }
    }
    //console.timeEnd("allTime");
    //====================================
}
$.Scene_Map_updateMain = Scene_Map.prototype.updateMain;
Scene_Map.prototype.updateMain = function() {
    $.Scene_Map_updateMain.apply(this,arguments);
    $gameMap.updateProjectilesQJ();
};
Game_Map.prototype.refreshMapBoxQJ = function() {
    //console.time("allTime");
    //========================================
    this._noPassBoxQJ=[];
    this._noPassBoxQJLaser=[];
    let nP = this._noPassBoxQJ,nPL = this._noPassBoxQJLaser,g2,g4,g6,g8;
    for (let x=0,xl=$dataMap.width;x<xl;x++) {
        nP.push([]);
        nPL.push([]);
        for (let y=0,yl=$dataMap.height;y<yl;y++) {
            g2=this.isPassable(x,y,2);
            g4=this.isPassable(x,y,4);
            g6=this.isPassable(x,y,6);
            g8=this.isPassable(x,y,8);
            nP[x].push(g2&&g4&&g6&&g8);
            nPL[x].push(0);
        }
    }
    this._noPassIndexLaserNowQJ = 1; 
    //========================================
    //console.timeEnd("allTime");
    //========================================
};
Game_Map.prototype.terrainBoxQJ = function(id) {
    return this._terrainBoxQJ[id]||[];
};
Game_Map.prototype.noPassBoxQJ = function(x,y) {
    x = Math.floor(x+0.5);
    y = Math.floor(y+0.5);
    if (x<0||x>=$gameMap.width()||y<0||y>=$gameMap.height()) return true;
    return this._noPassBoxQJ[x][y];
};
Game_Map.prototype.noPassBoxLaserQJ = function(x,y) {
    x = Math.round(x);
    y = Math.round(y);
    if (x<0||x>=$gameMap.width()||y<0||y>=$gameMap.height()) return true;
    return this._noPassBoxQJ[x][y]&&this._noPassBoxQJLaser[x][y]!=this._noPassIndexLaserNowQJ;
};
Game_Map.prototype.addMapBulletsNameQJ = function(index,name) {
    if (!name) return;
    for (let i=0,il=name.length;i<il;i++) {
        if (!this._mapBulletsNameQJ[name[i]]) {
            this._mapBulletsNameQJ[name[i]] = {};
        }
        this._mapBulletsNameQJ[name[i]][index] = index;
    }
};
Game_Map.prototype.deleteMapBulletsNameQJ = function(index,name) {
    if (!name) return;
    for (let i=0,il=name.length;i<il;i++) {
        if (!this._mapBulletsNameQJ[name[i]]) {
            this._mapBulletsNameQJ[name[i]] = {};
            return;
        }
        delete this._mapBulletsNameQJ[name[i]][index];
    }
};
Game_Map.prototype.addBulletQJ = function(bullet,type) {
    let bulletsTarget,index = this._mapBulletsQJLength;//this._mapBulletsQJ.length;
    this._mapBulletsQJLength++;
    if (!type)        bulletsTarget=new Game_QJBulletMZ(bullet,index);
    else if (type==1) bulletsTarget=new Game_QJLaserMZ(bullet,index);
    //else if (type==2) bulletsTarget=new Game_QJLine(bullet,index);
    if (!bulletsTarget.deadOver) {
        this._mapBulletsQJ[index] = bulletsTarget;
        if (SceneManager._scene&&SceneManager._scene._spriteset) SceneManager._scene._spriteset.createBulletQJ(index,type);
        if (bulletsTarget.afterDeal) bulletsTarget.afterDeal();
        return bulletsTarget;
    } else {
        return null;
    }    
};
Game_Map.prototype.removeBulletQJ = function(index) {
    let data=this._mapBulletsQJ[index];
    if (data) {
        this._mapBulletsQJ[index] = null;
        delete this._mapBulletsQJ[index];
    }
};
Game_Map.prototype.bulletQJ = function(index) {
    return this._mapBulletsQJ[index];
};
Game_Map.prototype.findBulletSpriteQJ = function(data) {
    if (!SceneManager._scene._spriteset||SceneManager._scene.constructor!=Scene_Map) {
        return null;
    }
    let container;
    let target = null;
    let spriteset = SceneManager._scene._spriteset;
    switch(data.data.z) {
        case "P" :
            container = spriteset._1ContainerQJ;
            break;
        case "M" :
            container = spriteset._2ContainerQJ;
            break;
        case "E" :
            container = spriteset._3ContainerQJ;
            break;
        case "W" :
            container = spriteset._4ContainerQJ;
            break;
        case "A" :
            container = spriteset._5ContainerQJ;
            break;
        default:
            container = spriteset._tilemap;
            break;
    } 
    for (let i of container.children) {
        if (i.data==data) {
            return i;
        }
    }
    return null;
};
//=============================================================================
//Game_Character
//=============================================================================
$.Game_Character_initMembers = Game_Character.prototype.initMembers;
Game_Character.prototype.initMembers = function() {
    $.Game_Character_initMembers.apply(this);
    this.refreshScreenBoxDataQJ();
}
Game_Character.prototype.refreshScreenBoxDataQJ = function() {
    //nothing
    //this._boxOffsetXQJ = 0;
    //this._boxOffsetYQJ = 0;
    //this._boxBodyQJ = null;
    //this.updateBoxBodyPositionQJ();
};
Game_Character.prototype.screenBoxXQJ = function() {
    return (this._realX + 0.5) * tileSize + this._boxOffsetX;
};
Game_Character.prototype.screenBoxYQJ = function() {
    return (this._realY + 0.5) * tileSize + this._boxOffsetY - (offsetGY?this.shiftY():0);
};
Game_Character.prototype.screenBoxXShowQJ = function() {
    return (this._realX + 0.5 - $gameMap.displayX()) * tileSize + this._boxOffsetX;
};
Game_Character.prototype.screenBoxYShowQJ = function() {
    return (this._realY + 0.5 - $gameMap.displayY()) * tileSize + this._boxOffsetY - (offsetGY?this.shiftY():0);
};
Game_Character.prototype.screenShootXQJ = function() {
    return this.screenX();
};
Game_Character.prototype.screenShootYQJ = function() {
    return this.screenY() - tileSize/2;
};
Game_Character.prototype.updateBoxBodyPositionQJ = function() {
    QJ.SAT.setPostion(this._boxBodyQJ,this.screenBoxXQJ(),this.screenBoxYQJ());
};
Game_Character.prototype.updateBoxDataQJ = function() {
    if (this._boxBodyQJ) {
        this.updateBoxBodyPositionQJ();
    } else {
        this.refreshScreenBoxDataQJ();
    }
};
//=============================================================================
//
//=============================================================================
/*Game_Character.prototype.addShadowCircle = function(character,data,time,delta) {
    if (typeof time == "number") {
        this.shadowCircle = [0,1,delta,time,character,data];
    } else {
        if (time[0]==0&&this==$gamePlayer) return;
        this.shadowCircle = [1,1,delta,time,character,data];
    }
    this.updateShadowCirccle();
};
Game_Character.prototype.updateShadowCirccle = function() {
    let sc = this.shadowCircle;
    if (sc[0]==0) {
        sc[1]--;
        if (sc[1]<=0) {
            sc[3]--;
            sc[1]=sc[2];
            QJ.MPMZ.Shadow(sc[4],sc[5]);
            if (sc[3]<=0) {
                this.shadowCircle = null;
            }
        }
    } else {
        if (QJ.MPMZ.dealTimeBoolean(sc[3],this)) this.shadowCircle = null;
        else {
            sc[1]--;
            if (sc[1]<=0) {
                sc[1]=sc[2];
                QJ.MPMZ.Shadow(sc[4],sc[5]);
            }
        }
    }
};*/
//=============================================================================
//Game_Player
//=============================================================================
Game_Player.prototype.refreshScreenBoxDataQJ = function() {
    //========================================
    this._boxOffsetX = $gameSystem._playerBoxData.offsetX;
    this._boxOffsetY = $gameSystem._playerBoxData.offsetY;
    this._boxBodyQJ = QJ.SAT.box(0,0,$gameSystem._playerBoxData.body);
    this.updateBoxBodyPositionQJ();
    //========================================
};
$.Game_Player_update = Game_Player.prototype.update;
Game_Player.prototype.update = function(sceneActive) {
    $.Game_Player_update.apply(this,arguments);
    this.updateBoxDataQJ();
};
//=============================================================================
//Game_Event
//=============================================================================
Game_Event.prototype.refreshScreenBoxDataQJ = function() {
    //========================================
    let ox =   $gameSystem._eventBoxData.offsetX;
    let oy =   $gameSystem._eventBoxData.offsetY;
    let body = $gameSystem._eventBoxData.body;
    //========================================
    let content=QJ.calculateAnnotation(this),detail;
    //========================================
    detail=content.match(/<BoxOffset:([^\,]+)\,([^\,\>]+)>/i);
    if (detail) {
        if (!isNaN(Number(detail[1]))&&!isNaN(Number(detail[2]))) {
            ox=Number(detail[1]);
            oy=Number(detail[2]);
        } 
    }
    //========================================
    detail=content.match(/<BoxType:([^\>]+)>/i);
    if (detail) {
        body=eval(detail[1]);
    }
    //========================================
    this.calculateOtherTagQJ(content);
    //========================================
    this._boxOffsetX = ox;
    this._boxOffsetY = oy;
    this._boxBodyQJ = QJ.SAT.box(0,0,body);
    this.updateBoxBodyPositionQJ();
    //========================================
};
Game_Event.prototype.calculateOtherTagQJ = function(content) {
    //========================================
    let detail = null;
    //========================================
    detail=content.match(/<laserObstacle>/i);
    if (detail) {
        this.laserObstacle = true;
    } else this.laserObstacle = false;
    //========================================
    detail=content.match(/<Group:([^\>]+)>/i);
    if (detail) {
        this._groupListQJ = [];
        detail=detail[1].split(',');
        for (let i of detail) {
            this._groupListQJ.push(i);
        }
    } else this._groupListQJ = [];
    //========================================
};
$.Game_Event_update = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
    $.Game_Event_update.apply(this,arguments);
    this.updateBoxDataQJ();
};
$.Game_Event_initMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function() {
    this._groupListQJ = null;
    $.Game_Event_initMembers.apply(this,arguments);
};
$.Game_Event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
    $.Game_Event_setupPage.apply(this,arguments);
    this.refreshScreenBoxDataQJ();
};
//=============================================================================
//
//=============================================================================
/*Game_Follower.prototype.refreshScreenBoxDataQJ = function() {
    //========================================
    this._boxOffsetX = $gameSystem._followerBoxData.offsetX;
    this._boxOffsetY = $gameSystem._followerBoxData.offsetY;
    this._boxBodyQJ = QJ.SAT.box(0,0,$gameSystem._followerBoxData.body);
    this.updateBoxBodyPositionQJ();
    //========================================
};
$.Game_Follower_update = Game_Follower.prototype.update;
Game_Follower.prototype.update = function(sceneActive) {
    $.Game_Follower_update.apply(this,arguments);
    this.updateBoxDataQJ();
};*/
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
    this._1ContainerQJ = new Sprite_ProjectileContainerQJMZ();
    this._baseSprite.addChild(this._1ContainerQJ);
    $.Spriteset_Map_createParallax.call(this);
    this._2ContainerQJ = new Sprite_ProjectileContainerQJMZ();
    this._baseSprite.addChild(this._2ContainerQJ);
};
$.Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function() {
    this._3ContainerQJ = new Sprite_ProjectileContainerQJMZ();
    this._3ContainerQJ.z = 0;
    this._tilemap.addChild(this._3ContainerQJ);
    $.Spriteset_Map_createCharacters.call(this);
    this._4ContainerQJ = new Sprite_ProjectileContainerQJMZ();
    this.addChild(this._4ContainerQJ);
};
$.Spriteset_Base_createTimer = Spriteset_Base.prototype.createTimer;
Spriteset_Base.prototype.createTimer = function() {
    $.Spriteset_Base_createTimer.call(this);
    this._5ContainerQJ = new Sprite_ProjectileContainerQJMZ();
    this.addChild(this._5ContainerQJ);
    for (let i in $gameMap._mapBulletsQJ) {
        if ($gameMap._mapBulletsQJ[i]) {
            this.createBulletQJ(i,$gameMap._mapBulletsQJ[i].bulletMode);
        }
    }
};
Spriteset_Map.prototype.createBulletQJ = function(index,type) {
    let data=$gameMap._mapBulletsQJ[index],spriteData;
    if (!type)        spriteData=new Sprite_QJBulletMZ(index);
    else if (type==1) spriteData=new Sprite_QJLaserMZ(index);
    //else if (type==2) spriteData=new Sprite_QJTwoPoint(index);
    if (typeof data.data.z == 'number') {//将子弹放到角色容器中
        //只显示特效的弹幕。当弹幕的z值是数字时弹幕将被放在事件容器中，此时需要其他原生弹幕容器来
        //承接它的拖尾和粒子效果的显示。此处使用了W号容器来承接。
        this._tilemap.addChild(spriteData);
        this._4ContainerQJ.addOnlyEffectChild(spriteData);
    } else if (data.data.z=="P") {
        this._1ContainerQJ.addChild(spriteData);
    } else if (data.data.z=="M") {
        this._2ContainerQJ.addChild(spriteData);
    } else if (data.data.z=="E") {
        this._3ContainerQJ.addChild(spriteData);
    } else if (data.data.z=="W") {
        this._4ContainerQJ.addChild(spriteData);
    } else if (data.data.z=="A") {
        this._5ContainerQJ.addChild(spriteData);
    }
};
//=============================================================================
//
//=============================================================================
QJ.MPMZ.model = [{},{}];
//=============================================================================
//
//=============================================================================
QJ.MPMZ.defaultData1 = {
    //==========================================:
    initialRotation:['PD'],
    position:[['P'],['P']],
    z:'W',
    img:'LaserCircle',
    imgRotation:['F'],
    blendMode:0,
    tone:[0,0,0,0],
    hue:0,
    opacity:1,
    scale:[1,1],
    anchor:[0.5,0.5],
    afterImage:null,
    particles:[],
    //==========================================:
    moveJS:[],
    deadJS:null,
    moveCE:[],
    groupName:[],
    //==========================================:
    collisionBox:['C',8],
    moveType:['S',4],
    //==================================================================
    extra:null,
    existData:[{t:['Time',180],d:[1,30,2]}],
    //==================================================================
    light:null,
    //==================================================================
    isPluginObject:false,//隐藏的属性，此属性是true时代表这是插件子弹。
    onScreen:false
    //==========================================:
};
//======================================================
if (true) {
    let standardExistData = {
        t:null,
        c:null,
        a:null,
        r:null,
        d:null,
        an:0,
        p:null,
        rb:0
    }
    let model1 = QJ.MPMZ.model[0];
    //Extra for no read directly.
    model1.initialRotationExtra = ((value,event,pos)=>{
        if (typeof value!='number') {
            let eventData,addValue;
            switch(value[0]) {
                case 'PD':value[0] = QJ.calculateAngleByDirectionAngle($gamePlayer.direction());addValue = value[1]?value[1]:0;break;
                case 'P' :value[0] = QJ.calculateAngleByTwoPointAngle(pos[0],pos[1],
                            $gamePlayer.screenShootXQJ(),$gamePlayer.screenShootYQJ());addValue = value[1]?value[1]:0;break;
                case 'M' :value[0] = QJ.calculateAngleByTwoPointAngle(pos[0],pos[1],TouchInput.x,TouchInput.y);addValue = value[1]?value[1]:0;break;
                case 'E' :eventData = value[1]==0?event:$gameMap.event(value[1]);
                            value[0] = eventData?QJ.calculateAngleByTwoPointAngle(pos[0],pos[1],eventData.screenShootXQJ(),
                                eventData.screenShootYQJ()):0;addValue = value[2]?value[2]:0;break;
                case 'ED' :eventData = value[1]==0?event:$gameMap.event(value[1]);
                            value[0] = eventData?QJ.calculateAngleByDirectionAngle(eventData.direction()):0;addValue = value[2]?value[2]:0;break;
                case 'G' :let id = QJ.MPMZ.getMinEventId(pos[0],pos[1],value[1]);
                            eventData = id==0?event:$gameMap.event(id);
                            value[0] = eventData?QJ.calculateAngleByTwoPointAngle(pos[0],pos[1],eventData.screenShootXQJ(),
                                eventData.screenShootYQJ()):0;addValue = value[2]?value[2]:0;break;
                case 'S':value[0] = Number(eval(value[1]));addValue = value[2]?value[2]:0;break;
                case 'C':value[0] = QJ.calculateAngleByTwoPointAngle(pos[0],pos[1],
                            model1.posExtra(value[1],event),model1.posExtra(value[2],event));
                            addValue = value[3]?value[3]:0;break;
            }
            if (isNaN(value[0])) value[0] = 0;
            value[0]+=addValue;
            return value[0];
        }
        return value;
    });
    model1.posExtra = ((value,event)=>{
        //==================================================
        let addValue;
        //==================================================
        if (typeof value[0]!='number') {
            switch(value[0][0]) {
                case 'P':addValue = value[0][1]?value[0][1]:0;
                         value[0] = $gamePlayer.screenShootXQJ();break;

                case 'M':addValue = value[0][1]?value[0][1]:0;
                         value[0] = TouchInput.x;break;

                case 'E':addValue = value[0][2]?value[0][2]:0;
                         let eventData = value[0][1]==0?event:$gameMap.event(value[0][1]);
                         value[0] = eventData?eventData.screenShootXQJ():0;break;

                case 'B':addValue = value[0][2]?value[0][2]:0;
                         let bulletData = $gameMap.bulletQJ(value[0][1]);
                         value[0] = bulletData?bulletData.screenXShowQJ():0;break;

                case 'S':addValue = value[0][2]?value[0][2]:0;
                         value[0] = Number(eval(value[0][1]));break;
            }
            if (isNaN(value[0])) value[0] = 0;
            value[0]+=addValue;
        }
        //==================================================
        if (typeof value[1]!='number') {
            switch(value[1][0]) {
                case 'P':addValue = value[1][1]?value[1][1]:0;
                         value[1] = $gamePlayer.screenShootYQJ();break;

                case 'M':addValue = value[1][1]?value[1][1]:0;
                         value[1] = TouchInput.y;break;

                case 'E':addValue = value[1][2]?value[1][2]:0;
                         let eventData = value[1][1]==0?event:$gameMap.event(value[1][1]);
                         value[1] = eventData?eventData.screenShootYQJ():0;break;

                case 'B':addValue = value[1][2]?value[1][2]:0;
                         let bulletData = $gameMap.bulletQJ(value[1][1]);
                         value[1] = bulletData?bulletData.screenYShowQJ():0;break;

                case 'S':addValue = value[1][2]?value[1][2]:0;
                         value[1] = Number(eval(value[1][1]));break;
            }
            if (isNaN(value[1])) value[1] = 0;
            value[1]+=addValue;
        }
        //==================================================
        return value;
    });
    /*model1.z = ((value)=>{
        return value;
    });*/
    model1.img = ((value)=>{
        if (typeof value == 'object'&&value[0]=='C') {
            let character = QJ.getCharacter(value[1]);
            let sprite = SceneManager._scene._spriteset.findTargetSprite(character);
            value=value.concat([character.characterName(),sprite._frame.x,sprite._frame.y,sprite._frame.width,sprite._frame.height]);
        } else if (typeof value == 'object'&&value[0]=='T') {
            if (value.length==4) value.push.apply(value,[16,'#000000',0,null]);
            else if (value.length==5) value.push.apply(value,['#000000',0,null]);
            else if (value.length==7) value.push.apply(value,[null]);
        }//[0'T',1text,2arrangement mode,3text color,4text size,[5stroke color,stroke thickness,font face]
        return value;
    });
    model1.imgRotation = ((value)=>{
        if (value[0]=="R") value[1] = new DEFrameQJ(null,value[1],0);
        return value;
    });
    /*model1.blendMode = ((value)=>{
        return value;
    });
    model1.tone = ((value)=>{
        return value;
    });*/
    model1.opacity = ((value)=>{
        value = new DEFrameQJ(null,value,0);
        return value;
    });
    model1.scale = ((value)=>{
        if (typeof value != 'object') value = [value,value];
        value[0] = new DEFrameQJ(null,value[0],0);
        value[1] = new DEFrameQJ(null,value[1],0);
        return value;
    });
    model1.anchor = ((value)=>{
        if (typeof value != 'object') value = [value,value];
        value[0] = new DEFrameQJ(null,value[0],0);
        value[1] = new DEFrameQJ(null,value[1],0);
        return value;
    });
    model1.afterImage = ((value)=>{
        if (value&&value.length>0) {
            value[0] = new DEFrameQJ(null,value[0],1);
            value[1] = new DEFrameQJ(null,value[1],0,true);
            value[3] = new DEFrameQJ(null,value[3],0,true);
            if (value[4]==null||value[4]==undefined) value[4] = true;
        }
        return value;
    });
    model1.particles = ((value)=>{
        value = (!value)?[]:value;
        let resultList = [];
        for (let i of value) {
            let list = {
                img:'circle-blue',
                offset:[0,0,180],
                offsetMin:[0,0,-30],
                offsetMax:[0,0,30],
                existTime:120,
                disappearTime:10,
                disappearScale:2,
                opacityMin:0.5,
                opacityMax:1,
                scaleXMin:1,
                scaleXMax:2,
                scaleYMin:1,
                scaleYMax:2,
                moveType:['-1*t','0'],
                intervalTime:2,
                bundleNumber:2,
                anchorX:0.5,
                anchorY:0.5,
                synScale:false
            };            
            for (let j in i) list[j] = i[j];
            if (!list.img) continue;
            list.count = 0;
            resultList.push(list);
        }
        return resultList;
    });
    model1.moveJS = ((value)=>{
        for (let i of value) {
            if (i) {
                i.push(i[1]);
                i[1] = i[1]>=0?0:-1;//-1代表只执行一次
            }
        }
        return value;
    });
    model1.moveCE = ((value)=>{
        for (let i of value) {
            if (i) {
                //startTime cycleTime CEId [value]
                if (i.length==3) i.push([]);
                i.push(i[1]);
                i[1] = i[1]>=0?0:-1;//-1代表只执行一次
            }
        }
        return value;
    });
    /*model1.deadJS = ((value)=>{
        return value;
    });*/
    /*model1.groupName = ((value)=>{
        return value;
    });*/
    model1.collisionBox = ((value)=>{
        if (value=='auto') value = ['auto'];
        if (value[0]=='auto') {
            if (value.length==0) {
                value = ['auto',0,0];
            }
        }
        return value;
    });
    /*model1.moveType = ((value)=>{
        return value;
    });*/
    model1.existData = ((value)=>{
        let newList = {};
        for (let i of value) {
            for (let j in standardExistData) {
                i[j] = i[j]?i[j]:standardExistData[j];
            }
            if (i.t[0]=='Region') i.t[0] = 'R';
            else if (i.t[0]=='Terrai') i.t[0] = 'T';
            else if (i.t[0]=='Group') i.t[0] = 'G';
            else if (i.t[0]=='Switch') i.t[0] = 'SW';
            else if (i.t[0]=='Script') i.t[0] = 'S';
            else if (i.t[0]=='Player') i.t[0] = 'P';
            else if (i.t[0]=='Bullet') i.t[0] = 'B';
            else if (i.t[0]=='EventPage') i.t[0] = 'EP';
            //================================
            if (!i.p||!(i.t[0]=='G'||i.t[0]=='P')) i.p = [0,true,true,true];
            else if (i.p.length==1) i.p = [i.p[0],true,true,true];
            else if (typeof i.p != 'object') i.p = [i.p,true,true,true];
            //================================
            if (!i.rb||!(i.t[0]=='R'||i.t[0]=='T'||i.t[0]=='NP'||i.t[0]=='G'||i.t[0]=='P'||i.t[0]=='B')) i.rb = [0,true,true,true];
            else if (i.rb.length==1) i.rb = [i.rb[0],true,true,true];
            else if (typeof i.rb != 'object') i.rb = [i.rb,true,true,true];
            //================================
            if (!newList[i.t[0]]) newList[i.t[0]] = 1;
            else newList[i.t[0]] += 1;
        }
        value.unshift(newList);
        return value;
    });
    model1.light = ((value)=>{
        if (value) {
            if ((!value.miniLightId&&!value.lightId)||!Imported.QJLighting) return null;
            value.synRotation = !!value.synRotation;
        }
        return value;
    });
    /*model1.extra = ((value)=>{
        return value;
    });*/
}
//======================================================
QJ.MPMZ.Shoot = function(data) {//=====================Shoot================
    //======================================
    let jsonEx = JsonEx;
    let copy = jsonEx.makeDeepCopy.bind(jsonEx);
    let bullet = copy(QJ.MPMZ.defaultData1);
    let eventId=QJ.getPointerId();
    let event = QJ.getCharacter(eventId);
    bullet.eventId = eventId;
    try {
        if ("position" in data) {bullet.position = data.position;data.position=null;}
        if ("initialRotation" in data) {bullet.initialRotation = data.initialRotation;data.initialRotation=null;}
        bullet.positionRem = copy(bullet.position);
        bullet.initialRotationRem = copy(bullet.initialRotation);
        bullet.position = QJ.MPMZ.model[0].posExtra(bullet.position,event);
        bullet.initialRotation = QJ.MPMZ.model[0].initialRotationExtra(bullet.initialRotation,event,bullet.position);
        bullet.position[0] += $gameMap.displayX()*tileSize;
        bullet.position[1] += $gameMap.displayY()*tileSize;
        for (let i in bullet) {
            if (data[i]!=undefined) {
                bullet[i] = data[i];
            }
            if (QJ.MPMZ.model[0][i]) {
                bullet[i] = QJ.MPMZ.model[0][i](bullet[i],event,bullet);
            }
        }
    } catch(e) {
        QJ.MPMZ.error(0,e.name+' '+e.message);
        return;
    }
    return $gameMap.addBulletQJ(bullet,0);
    //======================================
}
//=============================================================================
//
//=============================================================================
QJ.MPMZ.defaultData2 = {
    rotation:['M'],
    rotationStatic:true,
    position:[['P'],['P']],
    positionStatic:true,
    judgeWidth:12,
    judgeMode:['T'],
    existData:[{t:['Time',180],d:[1,30,2]}],
    length:['S',280],
    z:'E',
    img:'WideBeam',
    imgStretchMode:'C',
    imgPoint:'LaserCircle',
    blendMode:0,
    tone:[0,0,0,0],
    opacity:1,
    scaleX:1,
    moveJS:[],
    deadJS:null,
    moveCE:[],
    groupName:[],
    extra:null,
};
//======================================================
if (true) {
    let standardExistData = {
        t:null,
        c:null,
        a:null,
        r:null,
        d:null,
        an:0,
        p:null
    }
    let model1 = QJ.MPMZ.model[0];
    let model2 = QJ.MPMZ.model[1];
    model2.posExtra = model1.posExtra;
    model2.rotationExtra = model1.initialRotationExtra;
    model2.opacity = model1.opacity;
    model2.scaleX = ((value)=>{
        return new DEFrameQJ(null,value,0);
    });
    model2.judgeWidth = ((value)=>{
        return new DEFrameQJ(null,value,0);
    });
    model2.judgeMode = ((value)=>{
        if (value[0]=='W') {
            value.push(0);
        }
        return value;
    });
    model2.length = ((value)=>{
        if (value[0]=='S') {
            if (value.length<=2) {
                value.push(0);
                value.push([]);
            } else if (value.length<=3) {
                value.push([]);
            }
            for (let i of value[3]) {
                if (i[0]=='T'||i[0]=='R') {
                    if (typeof i[1] != 'object') {
                        i[1] = [i[1]];
                    }
                }
            }
            if (value[2]==-1) value[2] = 10;
        } else if (value[1]=='D') {
            //nothing
        }
        return value;
    });
    model2.moveJS = model1.moveJS;
    model2.moveCE = model1.moveCE;
    model2.deadJS = model1.deadJS;
    model2.existData = model1.existData;
}
//======================================================
QJ.MPMZ.Laser = function(data) {//=====================Laser================
    //======================================
    let bullet = JsonEx.makeDeepCopy(QJ.MPMZ.defaultData2);
    let event=QJ.getPointer();
    bullet.event = event;
    try {
        for (let i in bullet) {
            if (data[i]!=undefined) {
                bullet[i] = data[i];
            }
            if (QJ.MPMZ.model[1][i]) {
                bullet[i] = QJ.MPMZ.model[1][i](bullet[i],event,bullet);
            }
        }
    } catch(e) {
        QJ.MPMZ.error(0,e.name+' '+e.message);
        return;
    }
    //console.log(bullet);
    return $gameMap.addBulletQJ(bullet,1);
    //======================================
}
//=============================================================================
//
//=============================================================================
QJ.MPMZ.deleteProjectile = function(name) {
    for (let i in $gameMap._mapBulletsQJ) {
        let detail = $gameMap._mapBulletsQJ[i];
        if (detail) {
            if (!detail.data.isPluginObject&&detail.data.groupName.indexOf(name)>-1) {
                detail.setDead();
            }
        }
    }
}
QJ.MPMZ.setDestinationForBid = function(value) {
    QJ.MPMZ.forBidDestination = !!value;
}
//=============================================================================
//
//=============================================================================
//=================================================================
//不能有offset value
QJ.MPMZ.Shooter_ArcRange = function(initialRotation,data,arcOrStart,end,num = 3,disturbance = 0,minScale = 1,maxScale = 1) {
    let arc = arcOrStart;
    if (typeof arc == Array) {
        if (arc.length<4) arc.push(0);
    } else {
        arc = [arcOrStart,end,num,disturbance];
    }
    let irOffsetIndex = initialRotation.length;
    initialRotation.push(0);
    data.initialRotation = initialRotation;
    //====================================
    for (let i=arc[0],delta = (arc[1] - arc[0]) / arc[2];i<arc[1];i+=delta) {
        let size = minScale+Math.random()*(maxScale-minScale);
        data.scale = [size,size];
        data.initialRotation[irOffsetIndex] = (i+(Math.random()-0.5)*arc[3]);
        QJ.MPMZ.Shoot(JsonEx.makeDeepCopy(data));
    }
    //====================================
}
//=================================================================
QJ.MPMZ.itemGiverCharacter = function(type,itemId,charId) {
    //====================================
    let itemData,iconIndex;
    if (type==0||type=="item") {itemData = $dataItems[itemId];type=0;}
    else if (type==1||type=="weapon") {itemData = $dataWeapons[itemId];type=1;}
    else if (type==2||type=="armor") {itemData = $dataArmors[itemId];type=2;}
    else if (type==3||type=="gold") {itemData = null;type=3;}
    else return;
    if (type==3||type=="gold") {
        iconIndex = 359;
        QJ.MPMZ.Shoot({
            position:charId==-1?[["P"],["P"]]:[["E",charId],["E",charId]],
            img:['I',iconIndex],
            initialRotation:0,
            imgRotation:['S',0],
            moveType:['TP',6,10,15],
            existData:[{t:['P'],a:['S','QJ.gainItemEx(3,0,'+itemId+')'],d:[1,15,1.1]},
                {t:['Time',3600],d:[1,15,1.1]}]
        });
    } else {
        iconIndex = itemData.iconIndex;
        QJ.MPMZ.Shoot({
            position:charId==-1?[["P"],["P"]]:[["E",charId],["E",charId]],
            img:['I',iconIndex],
            initialRotation:0,
            imgRotation:['S',0],
            moveType:['TP',6,10,15],
            existData:[{t:['P'],a:['S','QJ.gainItemEx('+type+','+itemId+',1)'],d:[1,15,1.1]},
                {t:['Time',3600],d:[1,15,1.1]}]
        });
    }
    //====================================
}
//=================================================================
QJ.MPMZ.itemGiverXy = function(type,itemId,x,y) {
    //====================================
    let itemData,iconIndex;
    if (type==0||type=="item") {itemData = $dataItems[itemId];type=0;}
    else if (type==1||type=="weapon") {itemData = $dataWeapons[itemId];type=1;}
    else if (type==2||type=="armor") {itemData = $dataArmors[itemId];type=2;}
    else if (type==3||type=="gold") {itemData = null;type=3;}
    else return;
    if (type==3||type=="gold") {
        iconIndex = 359;
        QJ.MPMZ.Shoot({
            position:[x,y],
            img:['I',iconIndex],
            initialRotation:0,
            imgRotation:['S',0],
            moveType:['TP',6,10,15],
            existData:[{t:['P'],a:['S','QJ.gainItemEx(3,0,'+itemId+')'],d:[1,15,1.1]},
                {t:['Time',3600],d:[1,15,1.1]}]
        });
    } else {
        iconIndex = itemData.iconIndex;
        QJ.MPMZ.Shoot({
            position:[x,y],
            img:['I',iconIndex],
            initialRotation:0,
            imgRotation:['S',0],
            moveType:['TP',6,10,15],
            existData:[{t:['P'],a:['S','QJ.gainItemEx('+type+','+itemId+',1)'],d:[1,15,1.1]},
                {t:['Time',3600],d:[1,15,1.1]}]
        });
    }
    //====================================
}
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=================================================================
//=============================================================================
//
//=============================================================================
QJ.MPMZ.rangeAtk = function(position,target,action,collisionBox,lastAtkCharacter = {}) {
    let eventId=QJ.getPointerId();
    let event = QJ.getCharacter(eventId);
    position = QJ.MPMZ.model[0].posExtra(position,event);
    position[0] += $gameMap.displayX()*tileSize;
    position[1] += $gameMap.displayY()*tileSize;
    Game_QJBulletMZ.prototype.rangeAtk.call({index:-1},position,target,action,collisionBox,lastAtkCharacter);
}
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
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================
if (Imported.QJLighting) {
(()=>{
//=============================================================================
//mini light
//=============================================================================
Game_QJBulletMZ.prototype.createLightingData = function() {
    if (!this.data.light) return;
    if (this.data.light.miniLightId) {
        QJ.LL.miniLightObject(this.data.light.miniLightId,"QJMapProjectileMZ",{
            bulletIndex:this.index
        });
    } else if (this.data.light.lightId) {
        QJ.LL.lightObject(this.data.light.lightId,this.index,"QJMapProjectileMZ",{
            bulletIndex:this.index
        });
    }
}
$.Game_QJBulletMZ_afterDeal_ForQJLighting = Game_QJBulletMZ.prototype.afterDeal;
Game_QJBulletMZ.prototype.afterDeal = function() {
    $.Game_QJBulletMZ_afterDeal_ForQJLighting.apply(this,arguments);
    this.createLightingData();
}
Game_QJBulletMZ.prototype.direction = function() {
    return 2;
}
$.Game_QJBulletMZ_updateMove_ForQJLighting = Game_QJBulletMZ.prototype.updateMove;
Game_QJBulletMZ.prototype.updateMove = function() {
    $.Game_QJBulletMZ_updateMove_ForQJLighting.apply(this,arguments);
    this._realX = this.x / 48-0.5;
    this._realY = this.y / 48-0.5;
}
Game_QJBulletMZ.prototype.screenX = function() {
    return this.screenXShowQJ();
}
Game_QJBulletMZ.prototype.screenY = function() {
    return this.screenYShowQJ();
}
//=============================================================================
//mini light
//=============================================================================
QJ.LL.miniLightObjectFunction["QJMapProjectileMZ"] = {
    //update:function() {},
    updatePosition:function(od) {
        let bulletData = $gameMap.bulletQJ(this.attach.bulletIndex);
        if (!bulletData) {
            this.setDead();
            return;
        }
        this.x = bulletData.screenXQJ()+od.offsetX.get();
        this.y = bulletData.screenYQJ()+od.offsetY.get();
    },
    updateRotation:function(od) {
        let bulletData = $gameMap.bulletQJ(this.attach.bulletIndex);
        if (!bulletData) {
            this.setDead();
            return;
        }
        if (bulletData.data.light.synRotation) {
            this.rotation = bulletData.rotationMove*Math.PI/180;
        } else {
            this.rotation = od.rotation.get();
        }
    },
    //updateScale:function() {},
    //updateOpacity:function() {},
    //setDead:function() {}
}
//=============================================================================
//light
//=============================================================================
$.QJ_LL_getCharacter = QJ.LL.getCharacter;
QJ.LL.getCharacter = function(id) {
    if (typeof id == 'string'&&id[0]=='b') {
        return $gameMap.bulletQJ(Number(id.slice(1)));
    } else {
        return $.QJ_LL_getCharacter(id);
    }
}
QJ.LL.lightObjectFunction["QJMapProjectileMZ"] = {
    makeName:(value)=>'b'+value,
    updateRotation:function(od,character,d) {
        let bulletData = $gameMap.bulletQJ(this.attach.bulletIndex);
        if (!bulletData) return;
        if (bulletData.data.light.synRotation) {
            this.rotation = bulletData.rotationMove*Math.PI/180;
        }
    }
}
//=============================================================================
//
//=============================================================================
})();
}
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
if (isMV) {
    $.Game_Event_initialize = Game_Event.prototype.initialize;
    Game_Event.prototype.initialize = function(mapId, eventId) {
        this._commonEventQJ = new Array();
        $.Game_Event_initialize.apply(this,arguments);
    };
    Game_Event.prototype.steupCEQJ = function(value,reSetData,extraData) {
        let listData = this.event().pages[value-1];
        if (listData) {
            let interpreter = new Game_InterpreterCEQJ(value-1,reSetData,extraData);
            interpreter.setup(listData.list,this.eventId());
            if (!interpreter.isRunning()) interpreter.terminate();
            this._commonEventQJ.push(interpreter);
        }
    };
    $.Game_Event_updateParallel = Game_Event.prototype.updateParallel;
    Game_Event.prototype.updateParallel = function() {
        $.Game_Event_updateParallel.apply(this,arguments);
        this.updateCEQJ();
    };
    Game_Event.prototype.updateCEQJ = function() {
        if (this._commonEventQJ.length>0) {
            for (let idata=this._commonEventQJ,il=idata.length,i=0;i<il;i++) {
                if (idata[i]) {
                    idata[i].update();
                    if (idata[i].overLifeQJ) {
                        idata.splice(i,1);
                        i--;
                        il--;
                    }
                }
            }
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
    Game_Map.prototype.steupCEQJ = function(value,eid,reSetData,extraData) {
        if (!!$dataCommonEvents[value]) {
            let interpreter = new Game_InterpreterCEQJX(value,reSetData||{},extraData||{});
            interpreter.setup($dataCommonEvents[value].list,eid);
            if (!interpreter.isRunning()) interpreter.terminate();
            this._commonEventQJ.push(interpreter);
        }
    };
    $.Game_Map_update = Game_Map.prototype.update;
    Game_Map.prototype.update = function(sceneActive) {
        $.Game_Map_update.apply(this,arguments);
        if (this._commonEventQJ.length>0) {
            for (let idata=this._commonEventQJ,il=idata.length,i=0;i<il;i++) {
                if (idata[i]) {
                    idata[i].update();
                    if (idata[i].overLifeQJ) {
                        idata.splice(i,1);
                        i--;
                        il--;
                    }
                }
            }
        }
    }
    $.Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand;
    Game_Interpreter.prototype.executeCommand = function() {
        QJ.Pointer=this;
        return $.Game_Interpreter_executeCommand.apply(this,arguments);
    };
}
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================
//=============================================================================
//
//=============================================================================
})(QJ.MPMZ.reWrite);
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
//=============================================================================
//适配MV，来自QJ-CoreMZ.js
//=============================================================================
/*!
 * SAT.js - v0.9.0
 * License MIT
 * url https://github.com/jriecken/sat-js
 * build by QiuJiu
*/
//这里的命名空间与mv的弹幕插件冲突，为保证兼容我已修改mv的弹幕插件。
if (QJ.MPMZ.isMV) {
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
    SATPolygon.prototype.centerWithOffsetAndRotation = function () {  
        var calcPoints = this['calcPoints'];
        var centerPoint = [0,0]; 
        for (let i of calcPoints) {
            centerPoint[0]+=i.x;
            centerPoint[1]+=i.y;
        }
        centerPoint[0]/=calcPoints.length;
        centerPoint[1]/=calcPoints.length;
        centerPoint[0]+=this.pos.x;
        centerPoint[1]+=this.pos.y;
        return centerPoint;
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
if (QJ.MPMZ.isMV) {
    QJ.SAT = QJ.SAT || {};
    QJ.SAT.box = function(x,y,boxType){
        let body = null;
        if (boxType[0]=='C') {
            body = new SATCircle(new SATVector(x,y),boxType[1]);
            body.type = 0;
            body.dia = boxType[1];
        } else if (boxType[0]=='R') {
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
    QJ.SAT.boxX = function(x,y,body,sx,sy,ax,ay,r){
        let newSATBody;
        if (body[0]=='C') {
            newSATBody = QJ.SAT.box(x,y,['C',body[1]*(sx+sy)/2]);
        } else if (body[0]=='R') {
            newSATBody = QJ.SAT.box(x,y,['R',body[1]*sx,body[2]*sy]);
            newSATBody.setOffset(
                new SATVector(
                    body[1]*sx*(0.5-ax),
                    body[2]*sy*(0.5-ay)
                )
            );
            newSATBody.setAngle(r);
        }
        return newSATBody;
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
if (QJ.MPMZ.isMV) {
    function AnimatedQJ() {
        this.initialize.apply(this, arguments);
    }
    AnimatedQJ.prototype.initialize = function(nameOrVertical,horizontal,frames,skipFrames = 0) {
        this.v = 1;
        this.h = 1;
        this.f = 1;
        this.s = 0;
        if (typeof nameOrVertical == 'number') {
            this.v = nameOrVertical;
            this.h = horizontal;
            this.f = frames;
            this.s = skipFrames;
        } else if (typeof nameOrVertical == 'string') {
            let detail = nameOrVertical.match(/\[([\d]*),([\d]*),([\d]*)\]/i);
            if (detail) {
                this.v = Number(detail[1]);
                this.h = Number(detail[2]);
                this.f = Number(detail[3]);
            } else {
                detail = nameOrVertical.match(/\[([\d]*),([\d]*)\]/i);
                if (detail) {
                    this.v = Number(detail[1]);
                    this.h = 1;
                    this.f = Number(detail[2]);
                } else {
                    detail = nameOrVertical.match(/\[([\d]*),([\d]*),([\d]*),([\d]*)\]/i);
                    if (detail) {
                        this.v = Number(detail[1]);
                        this.h = Number(detail[2]);
                        this.f = Number(detail[3]);
                        this.s = Number(detail[4]);
                    }
                }
            }
        }
        this.m = this.h*this.v-this.s;
        this.reset();
    };
    //=========================================================================
    AnimatedQJ.prototype.reset = function() {
        this.n = 0;
        this.c = 0;
    };
    AnimatedQJ.prototype.add = function() {
        this.c++;
        if (this.c>=this.f) {
            this.c = 0;
            this.n++;
            if (this.n>=this.m) {
                this.n = 0;
            }
            return true;
        }
        return false;
    };
    //=========================================================================
    AnimatedQJ.prototype.get = function(w,h) {
        return {x:w/this.v*(this.n%this.v),y:h/this.h*Math.floor(this.n/this.v),w:w/this.v,h:h/this.h};
    };
    AnimatedQJ.prototype.set = function(objectData,w,h,force = false) {
        if (objectData.AnimatedQJIndex!=this.n || force) {
            objectData.setFrame(w/this.v*(this.n%this.v),h/this.h*Math.floor(this.n/this.v),w/this.v,h/this.h);
            objectData.AnimatedQJIndex = this.n;
        }
    };
    //=========================================================================
    AnimatedQJ.prototype.saveWH = function(w,h) {
        this.wi = w;
        this.he = h;
    };
    AnimatedQJ.prototype.getSaveWH = function() {
        return {x:this.wi/this.v*(this.n%this.v),y:this.he/this.h*Math.floor(this.n/this.v),w:this.wi/this.v,h:this.he/this.h};
    };
    AnimatedQJ.prototype.setSaveWH = function(objectData,force = false) {
        if (objectData.AnimatedQJIndex!=this.n || force) {
            objectData.setFrame(this.wi/this.v*(this.n%this.v),this.he/this.h*Math.floor(this.n/this.v),this.wi/this.v,this.he/this.h);
            objectData.AnimatedQJIndex = this.n;
        }
    };
    //======================================================================
    AnimatedQJ.prototype.addGetSetBaseSaveWH = function(objectData,force = false) {
        this.c++;
        if (this.c>=this.f) {
            this.c = 0;
            this.n++;
            if (this.n>=this.m) {
                this.n = 0;
            }
        }
        if (objectData.AnimatedQJIndex!=this.n || force) {
            objectData.frame = new Rectangle(
                this.wi/this.v*(this.n%this.v),
                this.he/this.h*Math.floor(this.n/this.v),
                this.wi/this.v,
                this.he/this.h
            );
        }
    };
    //======================================================================
    AnimatedQJ.isAnimated = function(name) {
        return name.includes('[')&&name.includes(']');
    };
    //=============================================================================
    //Dramtic effect   |direction effect    /fade effect    %circle effect
    //=============================================================================
    function DEFrameQJ() {
        this.initialize.apply(this, arguments);
    }
    DEFrameQJ.prototype.initialize = function(name,originData,dataType,noFadeCopy) {
        noFadeCopy = noFadeCopy||false;
        this.i = dataType;//0-number 1-text 2-degree
        this.n = name;
        this.d = {};
        this.m = 0;
        this.t = 0;
        this.rt = 0;
        this.isMode = true;
        if (typeof originData == "string"&&originData.includes("~")) {
            let data = originData.split("~"),num=0,fadeT=0,last;
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
                        num = QJ.hexToRgb(detail[1]);
                        last = QJ.hexToRgb(this.d[this.m])//[0,{r:0,g:0,b:0}];
                        for (let j=1;j<=fadeT;j++) {
                            this.d[this.m+j] = QJ.rgbToHex({
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
                        num = QJ.hexToRgb(detail[1]);
                        last = QJ.hexToRgb(this.d[this.m])//[0,{r:0,g:0,b:0}];
                        for (let j=1,xs;j<=fadeT;j++) {
                            xs = Math.sqrt(1-Math.pow(j/fadeT,2));
                            this.d[this.m+j] = QJ.rgbToHex({
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
            if (dataType==0) num = Number(originData);
            else if (dataType==1) num = originData;
            else if (dataType==2) num = Number(originData)*Math.PI/180;
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
    DEFrameQJ.prototype.setZero = function() {
        this.t = 0;
        if (this.d[0]!=undefined) {
            this.rt = 0;
        }
    };
}
if (QJ.MPMZ.isMV) {
    function Game_InterpreterCEQJ() {
        this.initialize.apply(this, arguments);
    }
    Game_InterpreterCEQJ.prototype = Object.create(Game_Interpreter.prototype);
    Game_InterpreterCEQJ.prototype.constructor = Game_InterpreterCEQJ;
    Game_InterpreterCEQJ.prototype.initialize = function(pageIndex,reSetData,extraData) {
        Game_Interpreter.prototype.initialize.call(this,0);
        this.pageIndex=pageIndex;
        for (let i in reSetData) this[i] = reSetData[i];
        this.extraData = extraData;
    };
    Game_InterpreterCEQJ.prototype.terminate = function() {
        //$gameMap.event(this.eventId())._commonEventQJ.splice($gameMap.event(this.eventId())._commonEventQJ.indexOf(this),1);
        this.overLifeQJ = true;
        Game_Interpreter.prototype.terminate.call(this);
    };
    //============================================================
    function Game_InterpreterCEQJX() {
        this.initialize.apply(this, arguments);
    }
    Game_InterpreterCEQJX.prototype = Object.create(Game_Interpreter.prototype);
    Game_InterpreterCEQJX.prototype.constructor = Game_InterpreterCEQJX;
    Game_InterpreterCEQJX.prototype.initialize = function(id,reSetData,extraData) {
        Game_Interpreter.prototype.initialize.call(this,0);
        this.commonEventId=id;
        for (let i in reSetData) this[i] = reSetData[i];
        this.extraData = extraData;
    };
    Game_InterpreterCEQJX.prototype.terminate = function() {
        //$gameMap._commonEventQJ.splice($gameMap._commonEventQJ.indexOf(this),1);
        this.overLifeQJ = true;
        Game_Interpreter.prototype.terminate.call(this);
    };
}
if (QJ.MPMZ.isMV) {
    Bitmap.prototype.measureTextHeight = function(text) {
        return this.fontSize;
    };
    Bitmap.prototype.drawTextVerticalQJ = function(text, x, y, maxWidth, lineHeight, align) {
        const context = this.context;
        const alpha = context.globalAlpha;
        maxWidth = maxWidth || this.fontSize;
        lineHeight = lineHeight || this.fontSize;
        let tx = x,ty = y;
        if (align === "center") tx += maxWidth / 2;
        if (align === "right")  tx += maxWidth;
        context.save();
        context.font = this._makeFontNameText();
        context.textAlign = align;
        context.textBaseline = "alphabetic";
        context.globalAlpha = 1;
        for (let i=0;i<text.length;i++) {
            this._drawTextOutline(text[i], tx, ty+i*this.fontSize, maxWidth);
            context.globalAlpha = alpha;
            this._drawTextBody(text[i], tx, ty+i*this.fontSize, maxWidth);
        }
        context.restore();
        this._baseTexture.update();
    };
    //=============================================================================
    //
    //=============================================================================
    Bitmap.blankBitmap = new Bitmap(0,0);
    Bitmap.measureTextSizeQJ = function(text,arrangement,fontSize,fontFace,fontItalic,fontBold) {
        fontItalic=fontItalic == null ? Bitmap.blankBitmap.fontItalic : fontItalic;
        fontSize=fontSize == null ? Bitmap.blankBitmap.fontSize : fontSize;
        fontItalic=fontFace == null ? Bitmap.blankBitmap.fontFace : fontFace;
        fontBold=fontBold == null ? Bitmap.blankBitmap.fontBold : fontBold;
        let tempData = {width:0,height:0};
        let tempCanvas = document.createElement("canvas");
        let tempCtx = tempCanvas.getContext("2d");
        tempCtx.font = Bitmap.prototype._makeFontNameText.call({fontItalic:fontItalic,fontSize:fontSize,fontItalic:fontItalic,fontBold:fontBold});
        if (arrangement==0) {//横排
            let result = tempCtx.measureText(text);
            tempData.width = result.width;
            tempData.height = Math.floor(fontSize*96/72);
        } else {//竖排
            let maxWidth = 0;
            for (let i=0,result;i<text.length;i++) {
                result = tempCtx.measureText(text[i]);
                if (result.width>maxWidth) {
                    maxWidth=result.width;
                }
            }
            tempData.width = maxWidth;
            tempData.height = fontSize * text.length;
        }
        return tempData;
    };
    //=============================================================================
    //
    //=============================================================================
    Bitmap.prototype.drawTextOnlyBodyQJ = function(text, x, y, maxWidth, lineHeight, align) {
        const context = this.context;
        const alpha = context.globalAlpha;
        maxWidth = maxWidth || 0xffffffff;
        let tx = x;
        let ty = Math.round(y + lineHeight / 2 + this.fontSize * 0.35);
        if (align === "center") {
            tx += maxWidth / 2;
        }
        if (align === "right") {
            tx += maxWidth;
        }
        context.save();
        context.font = this._makeFontNameText();
        context.textAlign = align;
        context.textBaseline = "alphabetic";
        context.globalAlpha = alpha;
        this._drawTextBody(text, tx, ty, maxWidth);
        context.restore();
        this._baseTexture.update();
    };
    Bitmap.prototype.drawTextOnlyOutLineQJ = function(text, x, y, maxWidth, lineHeight, align) {
        const context = this.context;
        const alpha = context.globalAlpha;
        maxWidth = maxWidth || 0xffffffff;
        let tx = x;
        let ty = Math.round(y + lineHeight / 2 + this.fontSize * 0.35);
        if (align === "center") {
            tx += maxWidth / 2;
        }
        if (align === "right") {
            tx += maxWidth;
        }
        context.save();
        context.font = this._makeFontNameText();
        context.textAlign = align;
        context.textBaseline = "alphabetic";
        context.globalAlpha = 1;
        this._drawTextOutline(text, tx, ty, maxWidth);
        context.restore();
        this._baseTexture.update();
    };
}
if (QJ.MPMZ.isMV) {
    QJ.Pointer = null;//The pointer.
    QJ.tileSize = 48;
    QJ.PI180 = Math.PI/180;
    QJ.getPointer = function() {
        if (!!QJ.Pointer) {
            if (typeof QJ.Pointer == "number") {
                if (QJ.Pointer>0) {
                    return QJ.getCharacter(QJ.Pointer);
                } else if (QJ.Pointer==-1) {
                    return $gamePlayer;
                } else {
                    return null;
                }
            } else if (QJ.Pointer.eventId) {
                return $gameMap.event(QJ.Pointer.eventId());
            }
        }
        return null;
    };
    QJ.getPointerId = function() {
        if (!!QJ.Pointer) {
            if (typeof QJ.Pointer == "number"&&QJ.Pointer>0) {
                let eData = $gameMap.event(QJ.Pointer);
                return eData?eData.eventId():0;
            } else if (QJ.Pointer.eventId()>0) {
                let eData = $gameMap.event(QJ.Pointer.eventId());
                return eData?eData.eventId():0;
            }
        }
        return 0;
    };
    QJ.getCharacter = function(value) {
        return value==0?QJ.getPointer():(value==-1?$gamePlayer:(value>0?$gameMap.event(value):null));
    };
    QJ.buildCharacter = function(target) {
        return target?(target==$gamePlayer?-1:target.eventId()):0;
    };
    QJ.createTexture = function(bit,name,container) {
        let lsCanvas = document.createElement('canvas');
        let lscontext = lsCanvas.getContext('2d');
        let lsBaseTexture = null;
        let w=bit.width,h=bit.height;
        lsCanvas.width = w;
        lsCanvas.height = h;
        lsBaseTexture = new PIXI.BaseTexture(lsCanvas);
        lsBaseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        lsBaseTexture.width = w;
        lsBaseTexture.height = h;
        lscontext.globalCompositeOperation = 'source-over';
        lscontext.drawImage(bit._canvas?bit._canvas:bit._image,0,0);//,w,h,0,0,w,h
        lsBaseTexture.update();
        if (name&&container) container[name] = lsBaseTexture;
        return lsBaseTexture;
    };
    QJ.gainItemEx = function(type,itemId,number) {
        //====================================
        let itemData;
        if (type==0||type=="item") itemData = $dataItems[itemId];
        else if (type==1||type=="weapon") itemData = $dataWeapons[itemId];
        else if (type==2||type=="armor") itemData = $dataArmors[itemId];
        else if (type==3||type=="gold") itemData = null;
        else return;
        //====================================
        if (type==3||type=="gold") $gameParty.gainGold(number);
        else $gameParty.gainItem(itemData,number,false);
        //====================================
    }
    QJ.gainItem = function(value1,value2,value3) {
        for(var i=value1;i<=value2;i++){
            $gameParty.gainItem($dataItems[i],value3);
      }
    };
    QJ.gainWeapon = function(value1,value2,value3) {
        for(var i=value1;i<=value2;i++){
            $gameParty.gainItem($dataWeapons[i],value3,true);
      }
    };
    QJ.gainArmor = function(value1,value2,value3) {
        for(var i=value1;i<=value2;i++){
            $gameParty.gainItem($dataArmors[i],value3,true);
      }
    };
    QJ.ss = function(eventId,name,value,mapId) {
        $gameSelfSwitches.setValue([mapId||$gameMap.mapId(),eventId,name.toUpperCase()],value);
    };
    QJ.ssv = function(eid,name,mapId) {
        return $gameSelfSwitches.value([mapId?mapId:$gameMap.mapId(),eid==0?QJPointer:eid,name]);
    };
    QJ.se = function(name,pan = 0,pitch = 100,volume = 100) {
        AudioManager.playSe({name:name,pan:pan,pitch:pitch,volume:volume});
    };
    QJ.calculateDirectionValueGet = function(value,direction) {
        value = String(value);
        if (value.includes('~')) {
            let detail = value.split('~');
            if (detail.length==4) {
                return [0,0,Number(detail[0]),0,Number(detail[1]),0,Number(detail[2]),0,Number(detail[3]),0][direction];
            } else if (detail.length==8) {
                return [0,Number(detail[0]),Number(detail[1]),Number(detail[2]),Number(detail[3]),
                    0,Number(detail[4]),Number(detail[5]),Number(detail[6]),Number(detail[7])][direction];
            }
        }
        return Number(value);
    };
    QJ.buildDirectionValue = function(value) {
        value = String(value);
        if (value.includes('~')) {
            let detail = value.split('~');
    
            if (detail.length==4) {
                return [0,0,Number(detail[0]),0,Number(detail[1]),0,Number(detail[2]),0,Number(detail[3]),0];
            } else if (detail.length==8) {
                return [0,Number(detail[0]),Number(detail[1]),Number(detail[2]),Number(detail[3]),
                    0,Number(detail[4]),Number(detail[5]),Number(detail[6]),Number(detail[7])];
            }
        }
        value = Number(value);
        return [0,value,value,value,value,0,value,value,value,value];
    };
    QJ.gainItemData = function(type,id) {
        if (type=='skill') {
            return $dataSkills[id];
        } else if (type=='item') {
            return $dataItems[id];
        } else if (type=='weapon') {
            return $dataWeapons[id];
        } else if (type=='armor') {
            return $dataArmors[id];
        } else {
            return null;
        }
    };
}
if (QJ.MPMZ.isMV) {
    QJ.randomColor = function(start,length) {
        return QJ.rgbToHex({
            r:start+Math.floor(Math.random()*length),
            g:start+Math.floor(Math.random()*length),
            b:start+Math.floor(Math.random()*length)});
    }
    QJ.colorGrad = function(bitmap,content,x,y,w,h,ro = 0,offset = 0) {
        if (content.constructor == Bitmap) {
            const grad = bitmap._context.createPattern(content._canvas || content._image,"repeat");
            if (grad&&grad.setTransform) {
                grad.setTransform(new DOMMatrix().
                    translateSelf(x+offset*Math.sin(ro),y-offset*Math.cos(ro),0).
                    rotateSelf(ro*180/Math.PI));
            }
            return grad;
        } else if (content.includes("|")) {
            const list=content.split("~");
            const colorNum = list.length;
            let k = Math.atan(w/h),diaL = Math.sqrt(w*w+h*h)/2,noSoildRadius;
            ro = ro%(Math.PI*2);
            if (ro<Math.PI/2) noSoildRadius = diaL*Math.cos(k-ro);
            else if (ro<Math.PI) noSoildRadius = -diaL*Math.cos(k+ro);
            else if (ro<Math.PI*3/2) noSoildRadius = -diaL*Math.cos(k-ro);
            else noSoildRadius = diaL*Math.cos(k+ro);
            const grad = bitmap._context.createLinearGradient(
                Math.floor(x+w/2+noSoildRadius*Math.sin(ro)),Math.floor(y+h/2-noSoildRadius*Math.cos(ro)),
                Math.floor(x+w/2-noSoildRadius*Math.sin(ro)),Math.floor(y+h/2+noSoildRadius*Math.cos(ro)));
            if (offset==0) {
                for(let i=0,detail,point;i<colorNum; i++) {
                    detail = list[i].split("|");
                    grad.addColorStop(detail[0],detail[1]);
                }
            } else {
                offset %= 1;//转为小数
                let hasNotMoveUp = true;
                //let listConsole = {};
                for(let i=0,detail,point; i<colorNum; i++) {
                    detail = list[i].split("|");
                    detail[0] = Number(detail[0]);
                    point = Math.floor((detail[0]+offset)*100)/100;
                    if (hasNotMoveUp&&point>1) {
                        hasNotMoveUp = false;
                        let lastColorDetail = list[(i-1<0)?(colorNum-1):(i-1)].split("|");
                        lastColorDetail[0] = Number(lastColorDetail[0]);
                        let trueColor = QJ.gradientPointCalculate(lastColorDetail[1],detail[1],(1-lastColorDetail[0]-offset)/(detail[0]-lastColorDetail[0]));
                        grad.addColorStop(1,trueColor);
                        grad.addColorStop(Math.round((point==1?1:point%1)*100)/100,detail[1]);
                        grad.addColorStop(0,trueColor);
                        //listConsole[1]=trueColor;
                        //listConsole[Math.round((point==1?1:point%1)*100)/100]=detail[1];
                        //listConsole[0]=trueColor;
                    } else {
                        grad.addColorStop(Math.round((point==1?1:point%1)*100)/100,detail[1]);
                        //listConsole[Math.round((point==1?1:point%1)*100)/100]=detail[1];
                    }
                }
                //console.log(listConsole);
            }
            return grad;
        } else {
            return content;
        }
    }
    QJ.gradientPointCalculate = function (start,end,rate) {
        let rgb1 = QJ.hexToRgb(start);
        let rgb2 = QJ.hexToRgb(end);
        let r = Math.floor(rgb1.r-(rgb1.r-rgb2.r)*rate).clamp(0,255);
        let g = Math.floor(rgb1.g-(rgb1.g-rgb2.g)*rate).clamp(0,255);
        let b = Math.floor(rgb1.b-(rgb1.b-rgb2.b)*rate).clamp(0,255);
        return QJ.rgbToHex({r:r,g:g,b:b});
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
        if (ex==x&&ey==y)ro=NaN;
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
    let transAngle = 180/Math.PI;
    QJ.calculateAngleByTwoPointAngle=function(x,y,ex,ey){
        let ro;
        if (ex>x&&ey<y)  ro=(-Math.atan((x-ex)/(y-ey)))         *transAngle;
        if (ex>x&&ey>y)  ro=(Math.PI-Math.atan((x-ex)/(y-ey)))  *transAngle;
        if (ex<x&&ey>y)  ro=(Math.PI-Math.atan((x-ex)/(y-ey)))  *transAngle;
        if (ex<x&&ey<y)  ro=(2*Math.PI-Math.atan((x-ex)/(y-ey)))*transAngle;
        if (ex==x&&ey>y) ro=180;
        if (ex==x&&ey<y) ro=0;
        if (ex>x&&ey==y) ro=90;
        if (ex<x&&ey==y) ro=270;
        if (ex==x&&ey==y)ro=NaN;
        return ro;
    };
    QJ.calculateAngleByDirectionAngle=function(direction){
        if (direction==1) return 225;//左下
        if (direction==2) return 180;
        if (direction==3) return 135;//右下
        if (direction==4) return 270;
        if (direction==6) return 90;
        if (direction==7) return 315;//左上
        if (direction==8) return 0;
        if (direction==9) return 45;//右上
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
    QJ.calculateRangeAndInt = function(list) {
        let standardList = [],detail;
        for (let i of list) {
            if (typeof i == "number") {
                standardList.push(i);
            } else if (typeof i == "string") {
                detail = i.split('-');
                for (let j=Number(detail[0]),jl=Number(detail[1]);j<=jl;j++) {
                    standardList.push(j);
                }
            }
        }
        return standardList;
    }
    //=============================================================================
    //
    //=============================================================================
}
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
