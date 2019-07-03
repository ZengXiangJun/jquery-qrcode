require('./index.less');
var qrcode = require('./jquery.qrcode.min.js');
var locale = require('./i18n');
var tpl = require('./index.html');
Enhancer.registerWidget({
    construct: function(profile, zContext) {
        qrcode($);
        profile = $.extend({
            style: 'canvas',
            width: 150,
            height: 150
        }, profile);
        var $container = this.getContainer();
        this.profile = profile;
        this.$container = $container;
        $container.addClass('jquery-qrcode');
        $container.html(tpl({}));
        this.affected();
        var that = this;
        $container.on('click', '#qrcode_wrap table,canvas', function() {
            that.trig('onQrcodeClick');
        })
        return $container;
    },
    onFrameReady: function(zContext) {
    },
    getData: function() {
        var $container = this.$container;
        return {
            'QRCODE_CONTENT': $container.find('#qrcode_wrap').attr('content') || ''
        };
    },
    isValid: function() {
        return true;
    },
    affected: function(zContext) {
        var profile = this.profile;
        var $container = this.$container;
        var that = this;
        $container.find('#qrcode_wrap').attr('content', '').html('');
        this.getSourceData(profile.srcId, {}, function(data){
            if (data.rows) {
                data = data.rows;
            }
            if (Array.isArray(data)) {
                data = data[0].text;
            }
            var option = {
                text: toUtf8(data),
                width: profile.width,
                height: profile.height
            }
            if (profile.style === 'table') {
                option.render = 'table';
            }
            $container.find('#qrcode_wrap').qrcode(option).attr('content', toUtf8(data));
            if ( profile.style === 'picture') {
                var canvas = $container.find('canvas')[0];
                var image = new Image();
                image.src = canvas.toDataURL("image/png");
                $container.find('canvas').remove();
                $container.find('#qrcode_wrap').html(image);

            }
            that.trig('complete');
        })
        function convertCanvasToImage(canvas) {
            
            
            return image;
        }
        function toUtf8(str) {   
            var out, i, len, c;
            out = "";   
            len = str.length;   
            for(i = 0; i < len; i++) {   
                c = str.charCodeAt(i);   
                if ((c >= 0x0001) && (c <= 0x007F)) {   
                    out += str.charAt(i);   
                } else if (c > 0x07FF) {   
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));   
                    out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));   
                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
                } else {   
                    out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));   
                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
                }   
            }   
            return out;   
        }
    }
});