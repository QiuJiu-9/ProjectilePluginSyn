//=============================================================================
// RPG Maker MZ - QJ-TextCodeEx.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc [Expand The Text Code][V1.0]
 * @author Qiu Jiu
 *
 * @help QJ-TextCodeEx.js
 *
 * ============================================================================
 * Text Codes:
 * ----------------------------------------------------------------
 * Text Code                  |  Function
 * ----------------------------------------------------------------
 * \Voice[Group Id,Index]     |  Play the voice auto.(Index begin with 1)
 * \Replace[Index]            |  Replace the code to text in parameter. 
 * \Face[Index]               |  Change the face index. *(1)
 * \Wait[Time]                |  Wait several frames.
 * ============================================================================
 * *(1) face index(the image can`t be changed):
 *                                               0   1   2   3
 *   0   1   2   3               or              4   5   6   7
 *   4   5   6   7                               8   9   10  11
 *                                               12  13  14  15
 * ============================================================================
 * ============================================================================
 * ============================================================================
 * ============================================================================
 *
 *
 * @param voice
 * @type struct<voiceList>[]
 * @text list of voice
 * @desc list of voice
 * @default []
 *
 * @param replaceText
 * @type text[]
 * @text text to replace
 * @desc the text to replace
 * @default []
 *
 *
*/
/*~struct~voiceList:
 *
 * @param id
 * @type text
 * @text Group Id
 * @desc The id of voice group.
 * @default author
 *
 * @param list
 * @type file[]
 * @text voice list
 * @desc voice list
 * @dir audio/se/
 * @default []
 *
 * @param volume
 * @type number
 * @min 0
 * @max 200
 * @text the volume of voice
 * @desc the volume of voice
 * @default 100
 *
*/
/*:zh
 * @target MZ
 * @plugindesc [Expand The Text Code][V1.0]
 * @author Qiu Jiu
 *
 * @help QJ-TextCodeEx.js
 *
 * ============================================================================
 * 文本转义字符:
 * ----------------------------------------------------------------
 * 转义字符                    |  功能
 * ----------------------------------------------------------------
 * \Voice[Group Id,Index]     |  播放在插件参数中指定的语音音效。（Index从1算起）
 * \Replace[Index]            |  替换指定字符。
 * \Face[Index]               |  在显示文字时改变人物头像编号。 *(1)
 * \Wait[Time]                |  等待一定帧数。
 * ============================================================================
 * *(1) 脸图编号规格（不能改变图片）:
 *                                               0   1   2   3
 *   0   1   2   3               or              4   5   6   7
 *   4   5   6   7                               8   9   10  11
 *                                               12  13  14  15
 * ============================================================================
 * ============================================================================
 * ============================================================================
 * ============================================================================
 *
 *
 * @param voice
 * @type struct<voiceList>[]
 * @text 人声列表
 * @desc 人声列表
 * @default []
 *
 * @param replaceText
 * @type text[]
 * @text 自定义替换文本
 * @desc 自定义替换文本
 * @default []
 *
 *
*/
/*~struct~voiceList:zh
 *
 * @param id
 * @type text
 * @text 编号
 * @desc 人声组的编号(Group Id)
 * @default author
 *
 * @param list
 * @type file[]
 * @text 人声列表
 * @desc 人声列表
 * @dir audio/se/
 * @default []
 *
 * @param volume
 * @type number
 * @min 0
 * @max 200
 * @text 人声音量
 * @desc 人声音量
 * @default 100
 *
*/
//=============================================================================
//
//=============================================================================
(($ = {}) => {
//=============================================================================
//
//=============================================================================
const pluginName = "QJ-TextCodeEx";
const parameters = PluginManager.parameters(pluginName);
let voiceData = ((data)=>{
    let voiceList = {};
    for (let i of data) {
        i = JsonEx.parse(i);
        i.list = eval(i.list);
        voiceList[i.id] = {name:i.id};
        let volume = Number(i.volume);
        for (let j=0,jData=i.list,jl=jData.length;j<jl;j++) {
            voiceList[i.id][j+1] = {name:jData[j],pan:0,pitch:100,volume:volume};
        }
    }
    return voiceList;
})(eval(parameters.voice));
let replaceData = eval(parameters.replaceText);
replaceData.unshift('');
//=============================================================================
//
//=============================================================================
$.Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
    let textOld = $.Window_Base_convertEscapeCharacters.apply(this,arguments);
    textOld = textOld.replace(/\x1bReplace\[(\d+)\]/gi, (_, p1) => {
        return (parseInt(p1)>0&&parseInt(p1)<replaceData.length)?replaceData[parseInt(p1)]:'[start with 1]'
    });
    return textOld;
};
//=============================================================================
//
//=============================================================================
Window_Base.prototype.getVoiceDataQJ = function(textState) {
    const regExp = /^\[([^\]]+)\]/;
    const arr = regExp.exec(textState.text.slice(textState.index));
    if (arr&&arr[1]&&arr[1].length>0) {
        textState.index += arr[0].length;
        let splitData = arr[1].split(',');
        if (voiceData[splitData[0]]&&voiceData[splitData[0]][splitData[1]]) {
            AudioManager.playSe(voiceData[splitData[0]][splitData[1]]);
        }
    }
    return "";
};
//=============================================================================
//
//=============================================================================
$.Window_Base_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
Window_Base.prototype.processEscapeCharacter = function(code, textState) {
    $.Window_Base_processEscapeCharacter.apply(this,arguments);
    switch (code) {
        case "VOICE":
            this.getVoiceDataQJ(textState);
            break;
    }
};
//=============================================================================
//
//=============================================================================
Window_Message.prototype.clearFaceImageQJ = function() {
    const rtl = $gameMessage.isRTL();
    const width = ImageManager.faceWidth;
    const height = this.innerHeight;
    const x = rtl ? this.innerWidth - width - 4 : 4;
    this.contents.clearRect(x, 0, width, height);
};
Window_Message.prototype.getFaceDataQJ = function(textState) {
    const regExp = /^\[([^\]]+)\]/;
    const arr = regExp.exec(textState.text.slice(textState.index));
    if (arr&&arr[1]&&arr[1].length>0&&!isNaN(Number(arr[1]))) {
        textState.index += arr[0].length;
        $gameMessage.setFaceIndexOnlyQJ(Number(arr[1]));
        this.clearFaceImageQJ();
        this.drawMessageFace();
    }
    return "";
};
//=============================================================================
//
//=============================================================================
$.Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    $.Window_Message_processEscapeCharacter.apply(this,arguments);
    switch (code) {
        case "FACE":
            this.getFaceDataQJ(textState);
            break;
    }
};
//=============================================================================
//
//=============================================================================
Game_Message.prototype.setFaceIndexOnlyQJ = function(faceIndex) {
    this._faceIndex = faceIndex;
};
//=============================================================================
//
//=============================================================================
})(/*blank*/);
//=============================================================================
//
//=============================================================================