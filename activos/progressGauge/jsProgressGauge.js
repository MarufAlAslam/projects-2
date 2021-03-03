(function (a) {
    'use strict';
    a.fn.JsProgressGauge = function (b) {
        b = a.extend({
            type: 'line',
            value: 100,
            showLabel: !0,
            showTitle: !0,
            title: '',
            duration: 1000,
            labelUnit: '%',
            animated: !0,
            fillBackgroundColor: '#3498db',
            backgroundColor: '#EEEEEE',
            barRadius: 4,
            fillRadius: 0,
            labelAlignment: 'right',
            labelPosition: 'top',
            labelFontSize: 14,
            titleFontSize: null,
            labelColor: '#000',
            titleColor: '#000',
            labelFormatter: null,
            barHeight: '15px',
            fillSize: '15px',
            width: '100%',
            boldLabels: !1,
            rotateLabels: !1,
            onFinish: null,
        }, b), a.options = b;
        var k = function (b) {
            if (b.value >= 100 && typeof b.onFinish == 'function') {
                b.onFinish(b);
                b.onFinish = null;
            }
        }
        var c = function (d) {
            var e = b._FillElement;
            var a = b._DisplayElement;
            var c = null;
            d = d > 100 ? 100 : d < 0 ? 0 : d;
            b.value = d;
            b.labelFormatter != null && typeof b.labelFormatter == 'function' && (c = b.labelFormatter(d, a) || ''), b.animated ? e.animate({
                [b.type == 'column' ? 'height' : 'width']: d + '%'
            }, {
                step: function (d) {
                    b.showLabel && (c != null ? a.html(c) : a.html(Math.round(d) + b.labelUnit));
                },
                duration: b.duration,
                complete: (typeof b.onFinish == 'function' && d >= 100) ? k.bind(this, b) : null
            }) : (e.css(b.type == 'column' ? 'height' : 'width', d + '%'), c != null ? a.html(c) : a.html(Math.round(d) + '%'));
        };
        var d = this.each(function (B, d) {
            a(d).data('progress-init') === undefined && a(d).data('progress-init', b.value);
            let z = a(d).data('progress-init');
            z === b.value && a(d).html('<div class="progressGauge-boxbar">' + '<div class="progressGauge-progressbar"></div>' + '<div class="progressGauge-progress"></div>' + '<div class="progressGauge-displaybox">' + '<span class="progressGauge-displayTitle"></span>' + '<span class="progressGauge-displayLabel"></span>' + '</div>' + '</div>');
            var i = +b.barHeight.toString().replace(/px/g, '');
            var g = +b.fillSize.toString().replace(/px/g, '');
            var s = a(d).find('.progressGauge-boxbar');
            var f = a(d).find('.progressGauge-progress');
            var t = a(d).find('.progressGauge-progressbar');
            var h = a(d).find('.progressGauge-displaybox');
            var l = a(d).find('.progressGauge-displayLabel');
            var m = a(d).find('.progressGauge-displayTitle');
            var j = b.barRadius - b.fillRadius;
            var u = {
                left: 'flex-start',
                right: 'flex-end',
                center: 'center'
            }[b.labelAlignment];
            var v = {
                top: 'flex-start',
                bottom: 'flex-end',
                center: 'center'
            }[b.labelPosition];
            b.showTitle && b.title != null && b.title.length > 0 && (m.html(b.title), u = 'space-between');
            var n = 'center';
            var w = b.titleFontSize != null ? b.titleFontSize : b.labelFontSize;
            var x = +b.labelFontSize > +b.titleFontSize ? +b.labelFontSize : +b.titleFontSize;
            var A = 'width';
            if (b.type == 'column') {
                var o = +b.width.toString().replace(/px/g, '').replace(/%/g, '');
                var e = o - g;
                var p = e < 0 ? g : o;
                A = 'height', s.css({
                    width: p,
                    height: i + 'px',
                    alignItems: 'flex-end',
                    margin: '0 auto'
                }), f.css({
                    background: b.fillBackgroundColor,
                    height: '0px',
                    borderRadius: b.fillRadius + 'px',
                    left: (e > 0 ? e / 2 : 0) + 'px',
                    width: g + 'px',
                    bottom: (e > 0 ? e / 2 : 0) + 'px'
                }), j > 0 && f.css({
                    borderRadius: j / 2 + 'px'
                }), t.css({
                    backgroundColor: b.backgroundColor,
                    borderRadius: b.radius,
                    width: o + 'px',
                    height: b.barHeight,
                    borderRadius: b.barRadius + 'px',
                    left: (e < 0 ? Math.abs(e / 2) : 0) + 'px'
                });
                var q = 0;
                b.labelAlignment == 'left' ? q = -(p + 10) : b.labelAlignment == 'right' && (q = p + 10), h.css({
                    flexDirection: 'column-reverse',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 'normal',
                    fontWeight: b.boldLabels ? 'bold' : 'normal',
                    left: q + 'px'
                }), b.rotateLabels && (h.css({
                    transform: 'rotate(270deg)',
                    width: i + 'px',
                    position: 'relative',
                    left: 'unset'
                }), b.labelPosition == 'top' ? h.css({
                    top: '25px'
                }) : b.labelPosition == 'bottom' && h.css({
                    bottom: '25px',
                    top: 'unset'
                })), l.css({
                    fontSize: b.labelFontSize + 'px',
                    color: b.labelColor,
                    alignItems: v,
                    justifyContent: 'center',
                    textAlign: 'center'
                }), m.css({
                    fontSize: w + 'px',
                    color: b.titleColor,
                    textAlign: 'center'
                });
            } else {
                var k = i - g;
                var y = k < 0 ? g : i;
                var r = 0;
                (b.labelPosition == 'top' || b.labelPosition == 'bottom') && (b.showLabel || b.showTitle) && (y += x + 6, b.labelPosition == 'top' ? (n = 'flex-end', r += x + 10) : n = 'flex-start'), s.css({
                    width: b.width,
                    height: y + 'px',
                    alignItems: n
                }), f.css({
                    background: b.fillBackgroundColor,
                    height: b.fillSize,
                    borderRadius: b.fillRadius + 'px',
                    top: r + k / 2 + 'px'
                }), k > 0 && f.css({
                    left: k / 2 + 'px'
                }), j > 0 && f.css({
                    borderRadius: j / 2 + 'px'
                }), t.css({
                    backgroundColor: b.backgroundColor,
                    borderRadius: b.radius,
                    height: b.barHeight,
                    borderRadius: b.barRadius + 'px',
                    top: r + 'px'
                }), h.css({
                    justifyContent: u,
                    alignItems: v,
                    fontWeight: b.boldLabels ? 'bold' : 'normal'
                }), l.css({
                    fontSize: b.labelFontSize + 'px',
                    color: b.labelColor
                }), m.css({
                    fontSize: w + 'px',
                    color: b.titleColor
                });
            }
            b._FillElement = f, b._DisplayElement = l, c(b.value);
        });
        return {
            options: b,
            elements: d,
            setValue: c,
        };
    };
}(jQuery), $('[js-progressbar]').each(function () {
    function c() {
        a.JsProgressGauge({
            value: a.data('value'),
            type: a.data('type'),
            showLabel: a.data('showLabel'),
            showTitle: a.data('showTitle'),
            title: a.data('title'),
            duration: a.data('duration'),
            labelUnit: a.data('labelUnit'),
            animated: a.data('animated'),
            fillBackgroundColor: a.data('fillBackgroundColor'),
            backgroundColor: a.data('backgroundColor'),
            barRadius: a.data('barRadius'),
            fillRadius: a.data('fillRadius'),
            labelAlignment: a.data('labelAlignment'),
            labelPosition: a.data('labelPosition'),
            labelFontSize: a.data('labelFontSize'),
            titleFontSize: a.data('titleFontSize'),
            labelColor: a.data('labelColor'),
            titleColor: a.data('titleColor'),
            labelFormatter: a.data('labelFormatter'),
            barHeight: a.data('barHeight'),
            fillSize: a.data('fillSize'),
            width: a.data('width'),
            boldLabels: a.data('boldLabels'),
            rotateLabels: a.data('rotateLabels'),
            onFinish: a.data('finish')
        });
    }
    var a = $(this);
    var b = 0;
    a.waypoint(function () {
        b += 1, b < 2 && c();
    }, {
        offset: '100%',
        triggerOnce: !0
    });
}));
