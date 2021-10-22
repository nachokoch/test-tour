(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"start":"this.init()","gap":10,"minWidth":20,"shadow":false,"borderRadius":0,"width":"100%","downloadEnabled":false,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"propagateClick":false,"paddingBottom":0,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingLeft":0,"scrollBarOpacity":0.5,"scrollBarVisible":"rollOver","definitions": [{"class":"PlayList","items":[{"camera":"this.panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_camera","media":"this.panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"class":"FadeOutEffect","duration":500,"easing":"linear","id":"effect_BE6F51EC_A9F8_BB48_41D0_7AE3C8AA40E4"},{"minWidth":1,"shadow":false,"borderRadius":0,"width":"27.273%","paddingTop":0,"url":"skin/Image_BF7CE555_A9E8_BB58_41D3_F1A1D7CC4561.png","id":"Image_BF7CE555_A9E8_BB58_41D3_F1A1D7CC4561","propagateClick":false,"paddingBottom":0,"horizontalAlign":"center","paddingLeft":0,"top":"5.53%","paddingRight":0,"backgroundOpacity":0,"minHeight":1,"verticalAlign":"middle","height":"43.607%","class":"Image","toolTipHorizontalAlign":"center","borderSize":0,"right":"35.87%","data":{"name":"Image11780"},"scaleMode":"fit_inside"},{"minWidth":1,"shadow":false,"borderRadius":0,"width":"100%","paddingTop":0,"url":"https://tlk.io/8e6efe","id":"WebFrame_A6EFF73D_A898_78C8_41DB_571D9E5DC110","propagateClick":false,"paddingBottom":0,"paddingLeft":0,"top":"0%","paddingRight":0,"backgroundOpacity":1,"scrollEnabled":true,"minHeight":1,"insetBorder":false,"backgroundColor":["#FFFFFF"],"height":"100%","backgroundColorDirection":"vertical","backgroundColorRatios":[0],"class":"WebFrame","left":"0%","toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"WebFrame3146"}},{"toolTipFontSize":"1.11vmin","subtitlesEnabled":true,"toolTipFontFamily":"Arial","minWidth":100,"displayTooltipInTouchScreens":true,"toolTipShadowHorizontalLength":0,"width":"100%","toolTipTextShadowBlurRadius":3,"progressBackgroundOpacity":1,"id":"MainViewer","subtitlesPaddingRight":5,"playbackBarHeadWidth":6,"propagateClick":false,"toolTipTextShadowOpacity":0,"translationTransitionDuration":1000,"playbackBarBackgroundColorDirection":"vertical","toolTipShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"subtitlesShadow":false,"toolTipFontColor":"#606060","doubleClickAction":"toggle_fullscreen","subtitlesFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","playbackBarHeadShadow":true,"playbackBarOpacity":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesBorderColor":"#FFFFFF","subtitlesPaddingBottom":5,"subtitlesBackgroundColor":"#000000","height":"100%","init":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_BF846983_A9F8_6BB8_41D9_0A377157FB3E, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_BF844983_A9F8_6BB8_41E3_5EF5A975FD8C, 'hideEffect', false)}.bind(this); if(!this.Container_BD3DB413_A9EB_98D8_41CE_BF07F615406D.get('visible')){ visibleFunc(this.Container_BD3DB413_A9EB_98D8_41CE_BF07F615406D) } else { invisibleFunc(this.Container_BD3DB413_A9EB_98D8_41CE_BF07F615406D) }","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarLeft":0,"playbackBarHeadOpacity":1,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"subtitlesTextShadowHorizontalLength":1,"toolTipShadowSpread":0,"playbackBarBottom":5,"transitionMode":"blending","playbackBarBackgroundOpacity":1,"subtitlesVerticalAlign":"bottom","class":"ViewerArea","toolTipPaddingBottom":4,"firstTransitionDuration":0,"toolTipOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadHeight":15,"displayTooltipInSurfaceSelection":true,"borderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressOpacity":1,"toolTipBorderSize":1,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"toolTipPaddingTop":4,"toolTipPaddingRight":6,"progressRight":0,"toolTipShadowBlurRadius":3,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadShadowColor":"#000000","progressOpacity":1,"shadow":false,"borderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderSize":0,"progressBarBorderColor":"#000000","subtitlesFontWeight":"normal","progressBackgroundColorDirection":"vertical","subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"paddingTop":0,"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","subtitlesHorizontalAlign":"center","toolTipFontWeight":"normal","paddingBottom":0,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"paddingLeft":0,"subtitlesTextShadowOpacity":1,"subtitlesOpacity":1,"top":0,"playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipPaddingLeft":6,"toolTipDisplayTime":600,"toolTipBorderRadius":3,"paddingRight":0,"vrPointerSelectionTime":2000,"progressBarOpacity":1,"transitionDuration":500,"toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"progressBottom":0,"toolTipShadowOpacity":1,"toolTipShadowColor":"#333333","subtitlesPaddingTop":5,"progressBorderSize":0,"subtitlesGap":0,"progressBackgroundColor":["#FFFFFF"],"progressHeight":10,"toolTipFontStyle":"normal","progressBarBorderRadius":0,"subtitlesPaddingLeft":5,"subtitlesFontColor":"#FFFFFF","progressBarBorderSize":0,"subtitlesBottom":50,"subtitlesTextDecoration":"none","toolTipTextShadowColor":"#000000","playbackBarBorderRadius":0,"surfaceReticleOpacity":0.6,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleSelectionOpacity":1,"subtitlesBackgroundOpacity":0.2,"left":0,"playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderSize":0,"toolTipHorizontalAlign":"center","progressBorderRadius":0,"vrPointerSelectionColor":"#FF6600","data":{"name":"Main Viewer"},"minHeight":50,"progressLeft":0,"surfaceReticleColor":"#FFFFFF","subtitlesFontSize":"3vmin"},{"class":"FadeOutEffect","duration":500,"easing":"linear","id":"effect_BF844983_A9F8_6BB8_41E3_5EF5A975FD8C"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","surfaceSelectionEnabled":false,"zoomEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"gap":10,"minWidth":1,"shadow":false,"borderRadius":0,"width":"17.445%","visible":false,"paddingTop":0,"id":"Container_BBF95446_A9B8_78B8_41E2_A440C3E59C16","propagateClick":false,"paddingBottom":0,"scrollBarOpacity":0.5,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingLeft":0,"horizontalAlign":"left","scrollBarVisible":"rollOver","children":["this.WebFrame_A6EFF73D_A898_78C8_41DB_571D9E5DC110"],"paddingRight":0,"backgroundOpacity":0.3,"height":"91.803%","verticalAlign":"top","backgroundColor":["#FFFFFF","#FFFFFF"],"overflow":"scroll","backgroundColorDirection":"vertical","backgroundColorRatios":[0,1],"bottom":"1.86%","layout":"absolute","class":"Container","left":"0.55%","scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"ContainerChat"},"contentOpaque":false,"minHeight":1},{"class":"FadeInEffect","duration":500,"easing":"linear","id":"effect_BF882648_A9A9_F8B7_41DB_922D25FB3A01"},{"gap":10,"minWidth":1,"shadow":false,"borderRadius":0,"width":"100%","paddingTop":0,"id":"Container_BCDF34BF_A9E7_F9C8_41DA_F276DA307B4D","propagateClick":false,"paddingBottom":0,"scrollBarOpacity":0.5,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingLeft":0,"horizontalAlign":"left","scrollBarVisible":"rollOver","children":["this.HTMLText_BF2A0364_A9F8_7F7F_417C_8DA4CC8EA120"],"paddingRight":0,"backgroundOpacity":1,"height":"11.694%","verticalAlign":"top","backgroundColor":["#FE4300","#FE4300"],"overflow":"scroll","backgroundColorDirection":"vertical","backgroundColorRatios":[0,1],"bottom":"24.92%","layout":"absolute","class":"Container","left":"0%","scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Container13872"},"contentOpaque":false,"minHeight":1},{"vfov":180,"overlays":["this.FramePanoramaOverlay_A703225D_A8AB_9949_41CE_59EAA47A752F","this.overlay_BF9BA98C_A999_ABC8_41E4_BB81883C86A3"],"pitch":0,"thumbnailUrl":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_t.jpg","label":trans('panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3.label'),"id":"panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3","partial":false,"class":"Panorama","hfovMin":"120%","hfovMax":130,"frames":[{"cube":{"levels":[{"colCount":36,"width":18432,"rowCount":6,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel"},{"colCount":18,"width":9216,"rowCount":3,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel"},{"colCount":12,"width":6144,"rowCount":2,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel"},{"colCount":6,"width":3072,"rowCount":1,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel"},{"colCount":6,"width":9216,"rowCount":1,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel"},{"colCount":6,"width":12288,"rowCount":1,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_t.jpg"}],"data":{"label":"circus_arena"},"hfov":360},{"class":"FadeInEffect","duration":500,"easing":"linear","id":"effect_BF846983_A9F8_6BB8_41D9_0A377157FB3E"},{"minWidth":1,"shadow":false,"borderRadius":0,"width":"4.545%","paddingTop":0,"url":"skin/Image_BE832CD1_A9A8_A958_41C5_F84CAC40DC66.png","id":"Image_BE832CD1_A9A8_A958_41C5_F84CAC40DC66","propagateClick":false,"paddingBottom":0,"paddingLeft":0,"horizontalAlign":"center","top":"0%","paddingRight":0,"backgroundOpacity":0,"minHeight":1,"verticalAlign":"middle","height":"7.213%","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_BF882648_A9A9_F8B7_41DB_922D25FB3A01, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_BF880648_A9A9_F8B7_41CC_F98331AD1FE0, 'hideEffect', false)}.bind(this); if(!this.Container_BBF95446_A9B8_78B8_41E2_A440C3E59C16.get('visible')){ visibleFunc(this.Container_BBF95446_A9B8_78B8_41E2_A440C3E59C16) } else { invisibleFunc(this.Container_BBF95446_A9B8_78B8_41E2_A440C3E59C16) }","class":"Image","left":"0.18%","toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"BotonChat"},"scaleMode":"fit_inside"},{"automaticZoomSpeed":0,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticRotationSpeed":0,"hoverFactor":0,"id":"panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_camera"},{"class":"FadeOutEffect","duration":500,"easing":"linear","id":"effect_BF880648_A9A9_F8B7_41CC_F98331AD1FE0"},{"minWidth":1,"shadow":false,"borderRadius":0,"width":"22.668%","paddingTop":10,"id":"HTMLText_BF75D749_A9E9_A748_41E0_967B4198761E","propagateClick":false,"paddingBottom":10,"scrollBarOpacity":0.5,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingLeft":10,"scrollBarVisible":"rollOver","paddingRight":10,"backgroundOpacity":0,"height":"6.885%","html":trans('HTMLText_BF75D749_A9E9_A748_41E0_967B4198761E.html'),"bottom":"45.27%","borderColor":"#000000","class":"HTMLText","scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":3,"right":"36.9%","minHeight":1,"data":{"name":"HTMLText1580"}},{"class":"FadeInEffect","duration":500,"easing":"linear","id":"effect_BE6F31EC_A9F8_BB48_41DB_7858AD473B71"},{"gap":10,"minWidth":1,"shadow":false,"borderRadius":0,"width":"100%","visible":false,"paddingTop":0,"id":"Container_BD3DB413_A9EB_98D8_41CE_BF07F615406D","propagateClick":false,"paddingBottom":0,"scrollBarOpacity":0.5,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingLeft":0,"horizontalAlign":"left","scrollBarVisible":"rollOver","top":"0%","children":["this.Image_BF7CE555_A9E8_BB58_41D3_F1A1D7CC4561","this.HTMLText_BF75D749_A9E9_A748_41E0_967B4198761E","this.Container_BCDF34BF_A9E7_F9C8_41DA_F276DA307B4D"],"paddingRight":0,"backgroundOpacity":0.9,"minHeight":1,"verticalAlign":"top","backgroundColor":["#000000","#000000"],"height":"100%","overflow":"scroll","backgroundColorDirection":"vertical","backgroundColorRatios":[0,1],"layout":"absolute","class":"Container","left":"0%","scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"LayoutBienvenida"},"contentOpaque":false},{"minWidth":1,"shadow":false,"borderRadius":0,"width":"31.514%","paddingTop":10,"id":"HTMLText_BF2A0364_A9F8_7F7F_417C_8DA4CC8EA120","propagateClick":false,"paddingBottom":10,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingLeft":10,"scrollBarOpacity":0.5,"scrollBarVisible":"rollOver","top":"13.79%","paddingRight":10,"backgroundOpacity":0,"minHeight":1,"height":"58.879%","html":trans('HTMLText_BF2A0364_A9F8_7F7F_417C_8DA4CC8EA120.html'),"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_BE6F31EC_A9F8_BB48_41DB_7858AD473B71, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_BE6F51EC_A9F8_BB48_41D0_7AE3C8AA40E4, 'hideEffect', false)}.bind(this); if(!this.Container_BD3DB413_A9EB_98D8_41CE_BF07F615406D.get('visible')){ visibleFunc(this.Container_BD3DB413_A9EB_98D8_41CE_BF07F615406D) } else { invisibleFunc(this.Container_BD3DB413_A9EB_98D8_41CE_BF07F615406D) }","borderColor":"#000000","class":"HTMLText","scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderSize":3,"right":"33.65%","data":{"name":"HTMLText1580"}},{"yaw":3.9,"useHandCursor":false,"height":720,"vfov":26.93,"class":"FramePanoramaOverlay","width":1280,"url":trans('FramePanoramaOverlay_A703225D_A8AB_9949_41CE_59EAA47A752F.url'),"contentInteractive":true,"hfov":44.22,"pitch":-2.45,"id":"FramePanoramaOverlay_A703225D_A8AB_9949_41CE_59EAA47A752F"},{"data":{"label":"Polygon"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_BF8429CA_A999_AB48_41E2_F18EBEF21440"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":127.7,"vfov":29.19,"class":"HotspotPanoramaOverlayImage","hfov":18.1,"image":{"class":"ImageResource","levels":[{"height":679,"width":415,"class":"ImageResourceLevel","url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_HS_40rna053.png"}]},"pitch":-17.11}],"id":"overlay_BF9BA98C_A999_ABC8_41E4_BB81883C86A3"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_BF8429CA_A999_AB48_41E2_F18EBEF21440"}],"horizontalAlign":"left","paddingRight":0,"backgroundOpacity":1,"minHeight":20,"verticalAlign":"top","backgroundColor":["#000000"],"defaultVRPointer":"laser","height":"100%","vrPolyfillScale":0.75,"overflow":"hidden","backgroundColorDirection":"vertical","backgroundColorRatios":[0],"mobileMipmappingEnabled":false,"children":["this.MainViewer","this.Container_BBF95446_A9B8_78B8_41E2_A440C3E59C16","this.Container_BD3DB413_A9EB_98D8_41CE_BF07F615406D","this.Image_BE832CD1_A9A8_A958_41C5_F84CAC40DC66"],"layout":"absolute","scripts":{"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizShowScore":TDV.Tour.Script.quizShowScore,"showWindow":TDV.Tour.Script.showWindow,"getKey":TDV.Tour.Script.getKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"init":TDV.Tour.Script.init,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setValue":TDV.Tour.Script.setValue,"clone":TDV.Tour.Script.clone,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initQuiz":TDV.Tour.Script.initQuiz,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizStart":TDV.Tour.Script.quizStart,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cloneCamera":TDV.Tour.Script.cloneCamera,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"downloadFile":TDV.Tour.Script.downloadFile,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupImage":TDV.Tour.Script.showPopupImage,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizFinish":TDV.Tour.Script.quizFinish,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"shareSocial":TDV.Tour.Script.shareSocial,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setLocale":TDV.Tour.Script.setLocale,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"existsKey":TDV.Tour.Script.existsKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"translate":TDV.Tour.Script.translate,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard},"class":"Player","backgroundPreloadEnabled":true,"scrollBarMargin":2,"toolTipHorizontalAlign":"center","desktopMipmappingEnabled":false,"borderSize":0,"data":{"defaultLocale":"en","name":"Player3172","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"pitch":1,"rate":1}},"contentOpaque":false,"mediaActivationMode":"window"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.3.0-beta.9313.js.map
//Generated with v2021.3.0-beta.9313, Fri Oct 22 2021