//=============================================================================
// RPG Maker MZ
//=============================================================================
/*:
 * @target MZ
 * @plugindesc [skip the title][For testing][V1.0]
 * @author Qiu Jiu
 *
 * @help 
 *
 *
 *
*/
//=============================================================================
//
//=============================================================================
Scene_Title.prototype = Object.create(Scene_Base.prototype);
 
Scene_Title.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
};
 
Scene_Title.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SceneManager.clearStack();
    DataManager.setupNewGame();
    SceneManager.goto(Scene_Map);
};
