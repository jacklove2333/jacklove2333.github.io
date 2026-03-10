System.register("chunks:///_virtual/CardItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Color, Component, eventManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      eventManager = module.eventManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "e15ceQK39ZBJ5j3mWhNp9hr", "CardItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardItem = exports('default', (_dec = ccclass('CardItem'), _dec2 = property(Sprite), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CardItem, _Component);

        function CardItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "icon", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "arrSprite", _descriptor2, _assertThisInitialized(_this));

          _this.bClick = true;
          _this.index = 0; //content里的位置

          _this.idx = 0; //content里的第几项/移出里的第几项

          _this.gameState = 0; //1地图，2游戏点击，3移出的点击

          _this.type = 0;
          return _this;
        }

        var _proto = CardItem.prototype;

        _proto.setInfo = function setInfo(type, index, idx, x, y) {
          if (!type) {
            this.icon.spriteFrame = null;
            this.node.active = false;
            return;
          }

          this.node.active = true;
          this.icon.spriteFrame = this.arrSprite[type];
          this.type = type;

          if (index !== undefined) {
            this.index = index;
            this.idx = idx;
            this.node.setPosition(x, y);
          }
        };

        _proto.setBGame = function setBGame(state) {
          this.gameState = state;
        };

        _proto.getType = function getType() {
          return this.type;
        };

        _proto.setClick = function setClick(bClick) {
          this.bClick = bClick;
          this.icon.color = bClick ? new Color().fromHEX('#FFFFFF') : new Color().fromHEX('#968989');
        };

        _proto.onClick = function onClick() {
          if (this.bClick && this.gameState === 2) {
            eventManager.dispatch('game_click_card', [this.idx - 1]);
          } else if (this.gameState === 3) {
            eventManager.dispatch('ydBox_click_card', [this.type]);
            this.node.destroy();
          }
        };

        return CardItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1511aQwDUVBf5ZYae7eXqE4", "EventManger", undefined);

      var ccclass = _decorator.ccclass;

      var EventManager = /*#__PURE__*/function () {
        function EventManager() {
          this._eventMap = {}; //对象对应的所有事件

          this._typeMap = {};
        }

        var _proto = EventManager.prototype; //事件对于的所有对象

        /**
         * 派发事件
         * @param evt 事件名(GameEvent 类中定义的事件名)
         * @param data  附带数据
         */

        _proto.dispatch = function dispatch(evt, data) {
          if (data === void 0) {
            data = null;
          }

          var t = this;
          var typeInfo = t._typeMap[evt]; //获取map里面所有对应事件的回调并执行

          if (typeInfo) {
            for (var key in typeInfo) {
              //遍历对应事件的map查找所有被注册的事件并执行
              var funcInfo = typeInfo[key];

              if (funcInfo && funcInfo.func) {
                funcInfo.func.call(funcInfo.funObj, data);
              }
            }
          }
        }
        /**
         * 添加事件
         * @param type - 事件名
         * @param func - 响应函数
         * @param funObj - 响应对象
         */
        ;

        _proto.addEvent = function addEvent(type, func, funObj) {
          var eventMap = this._eventMap;
          var typeMap = this._typeMap;
          var hashCode = funObj.uuid != null ? funObj.uuid : null; //获取对象的唯一id

          var key = hashCode; //添加事件处理

          var funInfo = {
            func: func,
            funObj: funObj
          };
          if (!eventMap[key]) eventMap[key] = {};
          eventMap[key][type] = funInfo; //生成对象，事件map，便于统一删除管理

          if (!typeMap[type]) typeMap[type] = {}; //生成事件，对象map方便广播遍历处理

          typeMap[type][key] = funInfo;
        }
        /**
         * 删除事件
         * @param type - 事件名
         * @param func - 响应函数
         * @param funObj - 响应对象
         */
        ;

        _proto.removeEvent = function removeEvent(type, func, funObj) {
          if (!funObj) return;
          var key = funObj.uuid != null ? funObj.uuid : null;
          if (this._eventMap[key]) delete this._eventMap[key][type];
          if (this._typeMap[type]) delete this._typeMap[type][key];
        }
        /**
         * 删除所有事件
         * @param evtObj -
         */
        ;

        _proto.removeEvents = function removeEvents(evtObj) {
          var eventMap = this._eventMap;
          var keyV = evtObj.uuid != null ? evtObj.uuid : null;
          var evtDic = eventMap[keyV];

          if (evtDic) {
            for (var key in evtDic) {
              var funcInfo = evtDic[key];

              if (funcInfo) {
                this.removeEvent(key, funcInfo.func, evtObj);
              }
            }
          }

          evtDic = null;
          delete this._eventMap[keyV];
        };

        _createClass(EventManager, null, [{
          key: "getInstance",
          get: function get() {
            this._instance || (this._instance = new EventManager());
            return this._instance;
          }
        }]);

        return EventManager;
      }();

      EventManager._instance = void 0;
      var eventManager = exports('eventManager', EventManager.getInstance);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameDialog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserConfig.ts', './EventManger.ts', './CardItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Prefab, instantiate, Component, userconfig, eventManager, CardItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      userconfig = module.userconfig;
    }, function (module) {
      eventManager = module.eventManager;
    }, function (module) {
      CardItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "7705dvoM5FI9KwDdaHLQ+GW", "GameDialog", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameDialog = exports('default', (_dec = ccclass('GameDialog'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameDialog, _Component);

        function GameDialog() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "title", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "box", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ydBox", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cardItem", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "arrNum", _descriptor6, _assertThisInitialized(_this));

          _this.nLevel = 1;
          _this.arrMap = []; //当前地图数据

          _this.before_index = []; //上一个点击的图标位置

          _this.num = 0; //消除次数

          _this.mapBox = {}; //盒子里的道具类型

          _this.nums = [2, 2, 2];
          return _this;
        }

        var _proto = GameDialog.prototype; //上移次数//回退次数//刷新次数

        _proto.onLoad = function onLoad() {
          this.initGame();
          this.initNum();
        };

        _proto.initGame = function initGame() {
          if (!userconfig.getMapData()[this.nLevel]) {
            eventManager.dispatch('tip_text', ['请先编辑关卡']);
            return;
          }

          this.mapBox = {};
          this.num = 0;
          this.before_index = [];
          this.title.string = '第' + this.nLevel + '关';
          this.arrMap = userconfig.getMapData()[this.nLevel];
          this.initMap();
        };

        _proto.initMap = function initMap() {
          this.content.removeAllChildren();
          this.box.removeAllChildren();

          for (var i = 0; i < this.arrMap.length; i++) {
            this.clickMapCard(this.arrMap[i]);
          }
        };

        _proto.initNum = function initNum() {
          for (var i in this.arrNum) {
            this.arrNum[i].string = this.nums[i].toString();
          }
        };

        _proto.clickMapCard = function clickMapCard(args) {
          //格子15*15，card大小80*80
          var num_y = Math.floor(args[0] / 15);
          var num_x = Math.floor(args[0] % 15);
          var x = 40 + num_x * 40;
          var y = -40 - num_y * 40;
          this.checkClickMap(args[0], this.content.children.length);
          var item = instantiate(this.cardItem);

          if (item) {
            this.content.addChild(item);
            item.getComponent(CardItem).setInfo(args[1], args[0], this.content.children.length, x, y);
            item.getComponent(CardItem).setBGame(2);
          }
        };

        _proto.checkClickMap = function checkClickMap(index, count) {
          var arrIndex = userconfig.getPos(index); //第一层

          var nextIndex = []; //第二层

          for (var i = count - 1; i >= 0; i--) {
            if (!this.content.children[i]) {
              continue;
            }

            var item_index = this.arrMap[i][0];

            if (arrIndex.indexOf(item_index) >= 0) {
              if (!nextIndex.length || nextIndex.indexOf(item_index) < 0) {
                nextIndex = nextIndex.concat(userconfig.getPos(item_index));
              }

              this.content.children[i].getComponent(CardItem).setClick(false);
            }
          }
        } //    //去掉上层卡片后下层卡片的状态改变，游戏会用到：位置，第几项
        ;

        _proto.clickCard = function clickCard(pos, index) {
          var arrIndex = userconfig.getPos(pos); //去掉的第一层

          var nextIndex = []; //第二层

          var arrState = []; //改变了状态的第几项

          for (var i = index; i >= 0; i--) {
            if (!this.content.children[i]) {
              continue;
            }

            var item_index = this.arrMap[i][0];

            if (arrIndex.indexOf(item_index) >= 0) {
              if (!nextIndex.length || nextIndex.indexOf(item_index) < 0) {
                nextIndex = nextIndex.concat(userconfig.getPos(item_index)); // this.content.children[i].getComponent(CardItem).setClick(true);
                //改变了状态的图片

                arrState.push(i);
              }
            }
          } //向上遍历，状态是否能正确改变


          var mapPos = userconfig.getMapDataPos()['map_' + this.nLevel];

          for (var _i = 0; _i < arrState.length; _i++) {
            for (var j = arrState[_i] + 1; j < this.content.children.length; j++) {
              if (this.before_index.indexOf(j) >= 0) {
                continue;
              }

              if (mapPos[j].indexOf(this.arrMap[arrState[_i]][0]) >= 0) {
                //被覆盖了
                arrState.splice(_i, 1);
                _i--;
                break;
              }
            }
          }

          for (var _i2 = 0; _i2 < arrState.length; _i2++) {
            this.content.children[arrState[_i2]].getComponent(CardItem).setClick(true);
          }
        };

        _proto.deleteCard = function deleteCard(args) {
          this.before_index.push(args[0]);
          var map = this.arrMap[args[0]];
          this.content.children[args[0]].getComponent(CardItem).setInfo(0);
          this.clickCard(map[0], args[0]); //改变状态
          //到box保存

          this.addBox(map[1]);
        } //    //box添加
        ;

        _proto.addBox = function addBox(type) {
          var _this2 = this;

          if (!this.mapBox[type]) {
            this.mapBox[type] = 0;
          }

          this.mapBox[type]++;
          var item = instantiate(this.cardItem);

          if (item) {
            this.box.addChild(item);
            item.getComponent(CardItem).setInfo(type);
          } //判断是否可消


          var bXc = false;

          for (var k in this.mapBox) {
            if (this.mapBox[k] >= 3) {
              this.mapBox[k] -= 3;

              for (var i = 0; i < this.box.children.length; i++) {
                if (!this.box.children[i]) {
                  break;
                }

                var _item = this.box.children[i];

                if (k === _item.getComponent(CardItem).getType().toString()) {
                  this.box.removeChild(_item);
                  i--;
                }
              }

              this.num++;
              bXc = true;
              break;
            }
          }

          if (!bXc) {
            var nums = 0;

            for (var _k in this.mapBox) {
              nums += this.mapBox[_k];
            }

            if (nums >= 7) {
              eventManager.dispatch('tip_message', ['挑战失败，是否重新开始', function () {
                _this2.initGame();
              }, true]);
              return;
            }
          }

          if (this.checkGameEnd()) {
            eventManager.dispatch('tip_text', ['通关成功']);
            this.nLevel++;
            this.initGame();
          }
        } //    //游戏结束逻辑
        ;

        _proto.checkGameEnd = function checkGameEnd() {
          return this.num * 3 === this.arrMap.length;
        };

        _proto.start = function start() {
          eventManager.addEvent('game_click_card', this.deleteCard.bind(this), this);
          eventManager.addEvent('ydBox_click_card', this.clickYdBox.bind(this), this);
        };

        _proto.onDestroy = function onDestroy() {
          eventManager.removeEvents(this);
        };

        _proto.clickYdBox = function clickYdBox(args) {
          this.addBox(args[0]);
        };

        _proto.onClickSy = function onClickSy() {
          if (this.nums[0] <= 0) {
            eventManager.dispatch('tip_text', ['剩余次数不足']);
            return;
          }

          if (this.box.children.length < 3) {
            eventManager.dispatch('tip_text', ['图标数量不足']);
            return;
          }

          var i = 0;
          var arrType = [];

          while (i < 3) {
            var item = this.box.children[0];
            var type = item.getComponent(CardItem).getType();
            arrType.push(type);
            this.box.removeChild(item);
            this.mapBox[type]--;
            i++;
          }

          var arrPosX = [];

          if (this.ydBox.children.length % 3 === 0) {
            arrPosX = [-90, 0, 90];
          } else if (this.ydBox.children.length % 3 === 1) {
            arrPosX = [0, 90, -90];
          } else {
            arrPosX = [90, -90, 0];
          }

          for (var _i3 = 0; _i3 < arrType.length; _i3++) {
            var _item2 = instantiate(this.cardItem);

            if (_item2) {
              this.ydBox.addChild(_item2);

              _item2.getComponent(CardItem).setInfo(arrType[_i3], 0, this.ydBox.children.length - 1, arrPosX[_i3], 0);

              _item2.getComponent(CardItem).setBGame(3);
            }
          }

          this.nums[0]--;
          this.initNum();
        };

        _proto.onClickHt = function onClickHt() {
          if (this.nums[1] <= 0) {
            eventManager.dispatch('tip_text', ['剩余次数不足']);
            return;
          }

          if (!this.box.children.length) {
            eventManager.dispatch('tip_text', ['请先点击图标']);
            return;
          } //获取box最后一项


          var item = this.box.children[this.box.children.length - 1];
          var type = item.getComponent(CardItem).getType();
          var idx = this.before_index[this.before_index.length - 1];
          this.arrMap[idx][1] = type;
          this.content.children[idx].getComponent(CardItem).setInfo(type);
          this.box.removeChild(item);
          this.before_index.pop();
          this.mapBox[type]--; //重新设置层级

          this.checkClickMap(this.arrMap[idx][0], idx);
          this.nums[1]--;
          this.initNum();
        };

        _proto.onClickSx = function onClickSx() {
          if (this.nums[2] <= 0) {
            eventManager.dispatch('tip_text', ['剩余次数不足']);
            return;
          } //图片类型随机打乱


          var newArr = [];

          for (var i = 0; i < this.arrMap.length; i++) {
            if (this.before_index.indexOf(i) >= 0) {
              continue;
            }

            newArr.push(this.arrMap[i][1]);
          }

          newArr.sort(function () {
            return Math.random() - 0.5;
          });

          for (var _i4 = 0; _i4 < this.arrMap.length; _i4++) {
            if (this.before_index.indexOf(_i4) >= 0) {
              continue;
            }

            if (newArr[0]) {
              this.arrMap[_i4][1] = newArr[0];
              newArr.shift();

              this.content.children[_i4].getComponent(CardItem).setInfo(this.arrMap[_i4][1]);
            }
          }

          this.nums[2]--;
          this.initNum();
        };

        _proto.onClose = function onClose() {
          this.node.destroy();
        };

        return GameDialog;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "box", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ydBox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cardItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrNum", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LineItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManger.ts', './MapDialog.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, eventManager, MapDialog;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      eventManager = module.eventManager;
    }, function (module) {
      MapDialog = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "70057Nm5g5PqJK+5nNX+oF9", "LineItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LineItem = exports('default', (_dec = ccclass('LineItem'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LineItem, _Component);

        function LineItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.index = 0;
          return _this;
        }

        var _proto = LineItem.prototype;

        _proto.setInfo = function setInfo(index) {
          this.index = index;
        };

        _proto.onClickAdd = function onClickAdd() {
          eventManager.dispatch('click_mapCard', [this.index, MapDialog.nSelect]);
        };

        return LineItem;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './CardItem.ts', './EventManger.ts', './GameDialog.ts', './LineItem.ts', './MapDialog.ts', './Menu.ts', './TipsManager.ts', './TipsText.ts', './UserConfig.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MapDialog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManger.ts', './UserConfig.ts', './LineItem.ts', './CardItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, ToggleContainer, Prefab, instantiate, Component, eventManager, userconfig, LineItem, CardItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      ToggleContainer = module.ToggleContainer;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      eventManager = module.eventManager;
    }, function (module) {
      userconfig = module.userconfig;
    }, function (module) {
      LineItem = module.default;
    }, function (module) {
      CardItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3;

      cclegacy._RF.push({}, "d0b50v621FH8ZE+vk8C1wiY", "MapDialog", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MapDialog = exports('default', (_dec = ccclass('MapDialog'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ToggleContainer), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MapDialog, _Component);

        function MapDialog() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "title", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapContent", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "toggle", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lineItem", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cardItem", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "arrNum", _descriptor7, _assertThisInitialized(_this)); //0随机


          _this.map_select = {}; //图片类型:数量

          _this.arrMap = [];
          _this.arrType = []; //顺序选择的图片

          _this.bSure = false;
          _this.nLevel = 1;
          return _this;
        }

        var _proto = MapDialog.prototype; //当前关卡

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          var _loop = function _loop(i) {
            _this2.toggle.toggleItems[i].node.on(Node.EventType.TOUCH_END, function () {
              MapDialog.nSelect = i;
            }, _this2);
          };

          for (var i = 0, len = this.toggle.toggleItems.length; i < len; i++) {
            _loop(i);
          }

          var data = userconfig.getMapData();

          for (var _i in data) {
            this.nLevel = Number(_i) + 1;
          }

          this.initTitle();
          this.initLine();
        };

        _proto.initTitle = function initTitle() {
          this.title.string = '第' + this.nLevel + '关';
        };

        _proto.initLine = function initLine() {
          this.mapContent.removeAllChildren();

          for (var i = 0; i < 225; i++) {
            var item = instantiate(this.lineItem);

            if (item) {
              this.mapContent.addChild(item);
              item.getComponent(LineItem).setInfo(i);
            }
          }
        } // onDestroy() {
        //     for(let i=0,len=this.toggle.toggleItems.length; i<len; i++){
        //         this.toggle.toggleItems[i].node.off('touchstart');
        //     }
        // }
        //切换关卡编辑
        ;

        _proto.otherLevel = function otherLevel() {
          this.map_select = {};
          this.arrMap = [];
          this.arrType = [];
          this.bSure = false;

          for (var i = 1; i < this.arrNum.length; i++) {
            this.arrNum[i].string = '0';
          }

          this.clearMap();
        };

        _proto.clearMap = function clearMap() {
          this.content.removeAllChildren();
        };

        _proto.onClickLeft = function onClickLeft() {
          if (this.nLevel === 1) {
            eventManager.dispatch('tip_text', ['前面没有关卡']);
            return;
          }

          if (this.bSure || !this.content.children.length) {
            this.nLevel--;
            this.initTitle();
            this.otherLevel();
          } else {
            eventManager.dispatch('tip_text', ['请先编辑此关卡']);
          }
        };

        _proto.onClickRight = function onClickRight() {
          if (this.bSure) {
            this.nLevel++;
            this.initTitle();
            this.otherLevel();
            return;
          }

          if (!this.content.children.length && userconfig.getMapData()[this.nLevel]) {
            this.nLevel++;
            this.initTitle();
            this.otherLevel();
          } else {
            eventManager.dispatch('tip_text', ['请先编辑此关卡']);
          }
        };

        _proto.onClose = function onClose() {
          this.node.destroy();
        };

        _proto.onClickCancel = function onClickCancel() {
          console.log('清空地图布阵');

          if (!this.checkContentMap()) {
            return;
          }

          this.otherLevel();
        };

        _proto.onClickReturn = function onClickReturn() {
          console.log('清除上一步添加');

          if (!this.checkContentMap()) {
            return;
          }

          var arrReturn = this.arrMap[this.arrMap.length - 1]; //当前去掉的图片及位置

          this.content.removeChild(this.content.children[this.content.children.length - 1]);
          this.arrMap.pop();
          var type = this.arrType[this.arrType.length - 1];
          this.map_select[type]--;
          this.arrNum[type].string = (Number(this.arrNum[type].string) - 1).toString();
          this.arrType.pop();
          this.clickCard(arrReturn[0], arrReturn[1]);
        };

        _proto.onClickSure = function onClickSure() {
          if (!this.checkContentMap()) {
            return;
          }

          if (!this.checkMap()) {
            eventManager.dispatch('tip_text', ['阵容非法，数量不是3的倍数,重新选择']);
            return;
          }

          userconfig.setMapData(this.nLevel, this.arrMap);
          this.bSure = true;
          this.onClickRight();
          eventManager.dispatch('tip_text', ['保存成功，已存入本地']);
        };

        _proto.onClickHide = function onClickHide() {
          this.mapContent.active = !this.mapContent.active;
        };

        _proto.checkContentMap = function checkContentMap() {
          if (!this.content.children.length) {
            eventManager.dispatch('tip_text', ['请先添加布阵']);
            return false;
          }

          return true;
        } //    //检测阵容合法性
        ;

        _proto.checkMap = function checkMap() {
          for (var i in this.map_select) {
            if (this.map_select[i] % 3 !== 0) {
              return false;
            }
          }

          return true;
        };

        _proto.start = function start() {
          eventManager.addEvent('click_mapCard', this.clickMapCard.bind(this), this);
        };

        _proto.onDestroy = function onDestroy() {
          eventManager.removeEvents(this);
        };

        _proto.clickMapCard = function clickMapCard(args) {
          //格子15*15，card大小80*80
          var num_y = Math.floor(args[0] / 15);
          var num_x = Math.floor(args[0] % 15);
          var x = 40 + num_x * 40;
          var y = -40 - num_y * 40;

          if (args[1] === 0) {
            //0取1-6随机数
            args[1] = Math.floor(Math.random() * 6) + 1;
          }

          this.checkClickMap(args[0], args[1], this.content.children.length);
          var item = instantiate(this.cardItem);

          if (item) {
            this.content.addChild(item);
            item.getComponent(CardItem).setInfo(args[1], args[0], this.content.children.length, x, y);
            item.getComponent(CardItem).setBGame(1);
          } //数字显示


          var num = Number(this.arrNum[args[1]].string);
          this.arrNum[args[1]].string = (num + 1).toString();
        };

        _proto.checkClickMap = function checkClickMap(index, type, count) {
          //赋值
          if (!this.map_select[type]) {
            this.map_select[type] = 0;
          }

          this.map_select[type]++;
          this.arrMap.push([index, type]);
          this.arrType.push(type);
          var arrIndex = userconfig.getPos(index); //第一层

          var nextIndex = []; //第二层

          for (var i = count - 1; i >= 0; i--) {
            if (!this.content.children[i]) {
              continue;
            }

            var item_index = this.arrMap[i][0];

            if (arrIndex.indexOf(item_index) >= 0) {
              if (!nextIndex.length || nextIndex.indexOf(item_index) < 0) {
                nextIndex = nextIndex.concat(userconfig.getPos(item_index));
              }

              this.content.children[i].getComponent(CardItem).setClick(false);
            }
          }
        } //    //去掉上层卡片后下层卡片的状态改变，游戏会用到：位置，类型
        ;

        _proto.clickCard = function clickCard(pos, type) {
          var arrIndex = userconfig.getPos(pos); //去掉的第一层

          var nextIndex = []; //第二层

          for (var i = this.content.children.length - 1; i >= 0; i--) {
            if (!this.content.children[i]) {
              continue;
            }

            var item_index = this.arrMap[i][0];

            if (arrIndex.indexOf(item_index) >= 0) {
              if (!nextIndex.length || nextIndex.indexOf(item_index) < 0) {
                nextIndex = nextIndex.concat(userconfig.getPos(item_index));
                this.content.children[i].getComponent(CardItem).setClick(true);
              }
            }
          }
        };

        return MapDialog;
      }(Component), _class3.nSelect = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mapContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lineItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cardItem", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arrNum", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Menu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManger.ts', './TipsManager.ts', './TipsText.ts', './UserConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, Component, eventManager, TipsManager, TipsText, userconfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      eventManager = module.eventManager;
    }, function (module) {
      TipsManager = module.default;
    }, function (module) {
      TipsText = module.default;
    }, function (module) {
      userconfig = module.userconfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "137ccIDGDRLVoh9OInahzvC", "Menu", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Menu = exports('default', (_dec = ccclass('Menu'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Menu, _Component);

        function Menu() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "mapDialog", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameDialog", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "content", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tipsManager", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tipsDialog", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Menu.prototype;

        _proto.onLoad = function onLoad() {
          //获取本地地图数据
          var json = localStorage.getItem('map');

          if (json) {
            userconfig.setMapDateJson(JSON.parse(json));
          }
        };

        _proto.start = function start() {
          eventManager.addEvent('tip_text', this.tipsText.bind(this), this);
          eventManager.addEvent('tip_message', this.tipsMessage.bind(this), this);
        };

        _proto.onDestroy = function onDestroy() {
          eventManager.removeEvents(this);
        } //    //提示[string]
        ;

        _proto.tipsText = function tipsText(arg) {
          var item = this.node.getChildByName('TipsText');

          if (!item) {
            item = instantiate(this.tipsDialog);
            this.node.addChild(item);
          }

          item.getComponent(TipsText).setText(arg[0]);
        } //    //是否确定[string,callback]
        ;

        _proto.tipsMessage = function tipsMessage(arg) {
          var item = this.node.getChildByName('TipsManager');

          if (!item) {
            item = instantiate(this.tipsManager);
            this.node.addChild(item);
          }

          if (arg[2]) {
            item.getComponent(TipsManager).hideBtn();
          }

          item.getComponent(TipsManager).setText(arg[0]);
          item.getComponent(TipsManager).setSureClick(this, function () {
            if (arg[1]) {
              arg[1]();
            }
          });
        };

        _proto.onClickGame = function onClickGame() {
          if (!userconfig.getMapData()['1']) {
            this.tipsText(['请先编辑关卡']);
            return;
          }

          var item = instantiate(this.gameDialog);

          if (item) {
            this.content.addChild(item);
          }
        };

        _proto.onClickMap = function onClickMap() {
          var item = instantiate(this.mapDialog);

          if (item) {
            this.content.addChild(item);
          }
        };

        return Menu;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapDialog", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameDialog", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipsManager", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tipsDialog", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TipsManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "5ff48fQBylLUbNOcW9sePF7", "TipsManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TipsManager = exports('default', (_dec = ccclass('TipsManager'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TipsManager, _Component);

        function TipsManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "text", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnClose", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnCancel", _descriptor3, _assertThisInitialized(_this));

          _this.target = null;
          _this.sureBack = null;
          _this.back_prama = undefined;
          return _this;
        }

        var _proto = TipsManager.prototype;

        _proto.onHide = function onHide() {
          this.unscheduleAllCallbacks();
        };

        _proto.setText = function setText(str) {
          this.text.string = str;
        };

        _proto.setSureClick = function setSureClick(target, sureBack) {
          this.target = target;
          this.sureBack = sureBack;

          for (var _len2 = arguments.length, argArray = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            argArray[_key2 - 2] = arguments[_key2];
          }

          this.back_prama = argArray;
        };

        _proto.onSureClick = function onSureClick() {
          if (this.target && this.sureBack) {
            this.sureBack.apply(this.target, this.back_prama);
          }

          this.onClose();
        };

        _proto.onClose = function onClose() {
          this.node.destroy();
        };

        _proto.hideBtn = function hideBtn() {
          this.btnClose.active = false;
          this.btnCancel.active = false;
        };

        return TipsManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnCancel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TipsText.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, UIOpacity, tween, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "6cbdajzyU5MuozugBCjPDMJ", "TipsText", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TipsText = exports('default', (_dec = ccclass('TipsText'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TipsText, _Component);

        function TipsText() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "text", _descriptor, _assertThisInitialized(_this));

          _this.myTween = null;
          return _this;
        }

        var _proto = TipsText.prototype;

        _proto.setText = function setText(str, time) {
          var _this2 = this;

          if (time === void 0) {
            time = 2;
          }

          this.stopTween();
          this.text.string = str;
          var ui_opacity = this.node.getComponent(UIOpacity);
          ui_opacity.opacity = 255;
          this.myTween = tween(ui_opacity).to(time, {
            opacity: 0
          }).call(function () {
            _this2.node.destroy();
          }).start();
        };

        _proto.stopTween = function stopTween() {
          if (this.myTween) {
            this.myTween.stop();
            this.myTween = null;
          }
        };

        return TipsText;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e099a0+ZaxLkIBrDhrPMU66", "UserConfig", undefined);

      var UserConfig = exports('UserConfig', /*#__PURE__*/function () {
        function UserConfig() {
          this.mapData = {}; //关卡位置数据   关卡:[位置，图片类型]

          this.mapDataPos = {};
        }

        var _proto = UserConfig.prototype; //关卡对应图片相交位置

        _proto.setMapDateJson = function setMapDateJson(data) {
          //地图数据存本地
          this.mapData = data; //计算出对应位置备用

          for (var i in this.mapData) {
            var _data = this.mapData[i];
            var map_data = [];

            for (var _i = 0; _i < _data.length; _i++) {
              map_data.push(this.getPos(_data[_i][0]));
            }

            this.mapDataPos['map_' + i] = map_data;
          }
        };

        _proto.getMapData = function getMapData() {
          return this.mapData;
        };

        _proto.getMapDataPos = function getMapDataPos() {
          return this.mapDataPos;
        };

        _proto.setMapData = function setMapData(key, data) {
          this.mapData[key.toString()] = data;
          var map_data = [];

          for (var i = 0; i < data.length; i++) {
            map_data.push(this.getPos(data[i][0]));
          }

          this.mapDataPos['map_' + key] = map_data;
          localStorage.setItem('map', JSON.stringify(this.mapData));
        } //    //获取相交坐标
        ;

        _proto.getPos = function getPos(index) {
          var arrIndex = []; //相交位置

          if (!Math.floor(index % 15)) {
            //最左边
            arrIndex.push(index + 1);

            if (!Math.floor(index / 15)) {
              //上面
              arrIndex.push(index + 15, index + 16);
            } else if (Math.floor(index / 15) >= 14) {
              //下面
              arrIndex.push(index - 15, index - 14);
            } else {
              //中间
              arrIndex.push(index + 15, index + 16, index - 15, index - 14);
            }
          } else if (!Math.floor((index + 1) % 15)) {
            //最右边
            arrIndex.push(index - 1);

            if (!Math.floor(index / 15)) {
              //上面
              arrIndex.push(index + 15, index + 14);
            } else if (Math.floor(index / 15) >= 14) {
              //下面
              arrIndex.push(index - 15, index - 16);
            } else {
              //中间
              arrIndex.push(index + 15, index + 14, index - 15, index - 16);
            }
          } else {
            arrIndex.push(index + 1, index - 1); //中间

            if (!Math.floor(index / 15)) {
              //上面
              arrIndex.push(index + 15, index + 14, index + 16);
            } else if (Math.floor(index / 15) >= 14) {
              //下面
              arrIndex.push(index - 15, index - 16, index - 14);
            } else {
              //中间
              arrIndex.push(index + 15, index + 14, index + 16, index - 15, index - 16, index - 14);
            }
          }

          return arrIndex;
        };

        return UserConfig;
      }());
      var userconfig = exports('userconfig', new UserConfig());

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});