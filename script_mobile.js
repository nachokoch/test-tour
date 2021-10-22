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
    var d = {"start":"this.init()","gap":10,"minWidth":20,"shadow":false,"borderRadius":0,"width":"100%","downloadEnabled":false,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"propagateClick":false,"paddingBottom":0,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingLeft":0,"scrollBarOpacity":0.5,"scrollBarVisible":"rollOver","definitions": [{"displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","surfaceSelectionEnabled":false,"zoomEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer"},{"class":"PlayList","items":[{"camera":"this.panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_camera","media":"this.panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"automaticZoomSpeed":0,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticRotationSpeed":0,"hoverFactor":0,"id":"panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_camera"},{"vfov":180,"overlays":["this.FramePanoramaOverlay_A703225D_A8AB_9949_41CE_59EAA47A752F","this.overlay_BF9BA98C_A999_ABC8_41E4_BB81883C86A3"],"pitch":0,"thumbnailUrl":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_t.jpg","label":trans('panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3.label'),"id":"panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3","partial":false,"class":"Panorama","hfovMin":"120%","hfovMax":130,"frames":[{"cube":{"levels":[{"colCount":36,"width":18432,"rowCount":6,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel"},{"colCount":18,"width":9216,"rowCount":3,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel"},{"colCount":12,"width":6144,"rowCount":2,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel"},{"colCount":6,"width":3072,"rowCount":1,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel"},{"colCount":6,"width":9216,"rowCount":1,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel"},{"colCount":6,"width":12288,"rowCount":1,"url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_t.jpg"}],"data":{"label":"circus_arena"},"hfov":360},{"toolTipFontSize":"1.11vmin","subtitlesEnabled":true,"toolTipFontFamily":"Arial","minWidth":50,"toolTipShadowHorizontalLength":0,"width":"100%","toolTipTextShadowBlurRadius":1,"progressBackgroundOpacity":1,"id":"MainViewer_mobile","subtitlesPaddingRight":5,"playbackBarHeadWidth":6,"propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarBackgroundColorDirection":"vertical","toolTipShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"subtitlesShadow":false,"toolTipFontColor":"#606060","doubleClickAction":"toggle_fullscreen","subtitlesFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"playbackBarOpacity":1,"playbackBarProgressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesPaddingBottom":5,"subtitlesBackgroundColor":"#000000","height":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarLeft":0,"playbackBarHeadOpacity":1,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"subtitlesTextShadowHorizontalLength":1,"toolTipShadowSpread":0,"playbackBarBottom":5,"transitionMode":"blending","playbackBarBackgroundOpacity":1,"subtitlesVerticalAlign":"bottom","playbackBarHeadHeight":15,"toolTipPaddingBottom":2,"firstTransitionDuration":0,"toolTipOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"class":"ViewerArea","displayTooltipInSurfaceSelection":true,"borderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressOpacity":1,"toolTipBorderSize":1,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"toolTipPaddingTop":2,"toolTipPaddingRight":3,"progressRight":0,"toolTipShadowBlurRadius":1,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadShadowColor":"#000000","progressOpacity":1,"shadow":false,"borderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderSize":0,"progressBarBorderColor":"#000000","subtitlesFontWeight":"normal","progressBackgroundColorDirection":"vertical","subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"paddingTop":0,"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","subtitlesHorizontalAlign":"center","toolTipFontWeight":"normal","paddingBottom":0,"progressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":1.5,"paddingLeft":0,"subtitlesOpacity":1,"toolTipDisplayTime":600,"playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipPaddingLeft":3,"progressBackgroundColor":["#FFFFFF"],"toolTipBorderRadius":1,"paddingRight":0,"vrPointerSelectionTime":2000,"progressBarOpacity":1,"transitionDuration":500,"toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"progressBottom":0,"toolTipShadowOpacity":1,"toolTipShadowColor":"#333333","subtitlesPaddingTop":5,"progressBorderSize":0,"subtitlesGap":0,"subtitlesBottom":50,"progressHeight":10,"toolTipFontStyle":"normal","progressBarBorderRadius":0,"subtitlesPaddingLeft":5,"subtitlesFontColor":"#FFFFFF","progressBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","subtitlesTextDecoration":"none","toolTipTextShadowColor":"#000000","playbackBarBorderRadius":0,"surfaceReticleOpacity":0.6,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleSelectionOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderSize":0,"toolTipHorizontalAlign":"center","progressBorderRadius":0,"vrPointerSelectionColor":"#FF6600","data":{"name":"Main Viewer"},"displayTooltipInTouchScreens":true,"minHeight":25,"progressLeft":0,"translationTransitionDuration":1000,"subtitlesFontSize":"3vmin"},{"yaw":3.9,"useHandCursor":false,"height":720,"vfov":26.93,"class":"FramePanoramaOverlay","width":1280,"url":trans('FramePanoramaOverlay_A703225D_A8AB_9949_41CE_59EAA47A752F.url'),"contentInteractive":true,"hfov":44.22,"pitch":-2.45,"id":"FramePanoramaOverlay_A703225D_A8AB_9949_41CE_59EAA47A752F"},{"data":{"label":"Polygon"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_BF8429CA_A999_AB48_41E2_F18EBEF21440"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":127.7,"vfov":29.19,"class":"HotspotPanoramaOverlayImage","hfov":18.1,"image":{"class":"ImageResource","levels":[{"height":679,"width":415,"class":"ImageResourceLevel","url":"media/panorama_A5220977_A863_E9E4_41B7_05CFB7D72EC3_HS_40rna053.png"}]},"pitch":-17.11}],"id":"overlay_BF9BA98C_A999_ABC8_41E4_BB81883C86A3"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_BF8429CA_A999_AB48_41E2_F18EBEF21440"}],"horizontalAlign":"left","paddingRight":0,"backgroundOpacity":1,"minHeight":20,"verticalAlign":"top","backgroundColor":["#000000"],"defaultVRPointer":"laser","height":"100%","vrPolyfillScale":0.75,"overflow":"hidden","backgroundColorDirection":"vertical","backgroundColorRatios":[0],"mobileMipmappingEnabled":false,"children":["this.MainViewer_mobile"],"layout":"absolute","scripts":{"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizShowScore":TDV.Tour.Script.quizShowScore,"showWindow":TDV.Tour.Script.showWindow,"getKey":TDV.Tour.Script.getKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"init":TDV.Tour.Script.init,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setValue":TDV.Tour.Script.setValue,"clone":TDV.Tour.Script.clone,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initQuiz":TDV.Tour.Script.initQuiz,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizStart":TDV.Tour.Script.quizStart,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cloneCamera":TDV.Tour.Script.cloneCamera,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"downloadFile":TDV.Tour.Script.downloadFile,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupImage":TDV.Tour.Script.showPopupImage,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizFinish":TDV.Tour.Script.quizFinish,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"shareSocial":TDV.Tour.Script.shareSocial,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setLocale":TDV.Tour.Script.setLocale,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"existsKey":TDV.Tour.Script.existsKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"translate":TDV.Tour.Script.translate,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard},"class":"Player","backgroundPreloadEnabled":true,"scrollBarMargin":2,"toolTipHorizontalAlign":"center","desktopMipmappingEnabled":false,"borderSize":0,"data":{"defaultLocale":"en","name":"Player3172","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"pitch":1,"rate":1}},"contentOpaque":false,"mediaActivationMode":"window"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.3.0-beta.9313.js.map
//Generated with v2021.3.0-beta.9313, Fri Oct 22 2021