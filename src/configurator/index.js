require('./index.less');
var locale = require('./i18n');
var template = require('./index.html');
var configurator = {
    construct: function() {
        var tplHTML = template({
            locale: locale()
        });
        $('body').html(tplHTML);
        $('#width,#height').blur(function() {
            var val = parseInt($(this).val())
            if (val < 20) {
                $(this).val(20);
            }
        })
    },
    setProfile: function(profile) {
        profile = $.extend({
            style: 'canvas',
            width: 150,
            height: 150
        }, profile);
        if (profile.srcId) {
            $('#dataSrc').attr('srcId', profile.srcId);
        }
        this.optionsConfigurator = Enhancer.DatasourceManager
        .createConfigurator('dataSrc', {
            title: locale('title'),
            dataSpecification: locale('dataSpecification'),
            sourceId: profile.srcId,
            onSave : function(src){
                $('#dataSrc').attr('srcId', src.id);
            }
        });
        $('#style').val(profile.style);
        $('#width').val(profile.width);
        $('#height').val(profile.height);
    },
    getProfile: function() {
        if ($('#dataSrc').attr('srcId')) {
            return {
                srcId: $('#dataSrc').attr('srcId'),
                style: $('#style').val(),
                width: parseInt($('#width').val()),
                height: parseInt($('#height').val())
            }
        } else {
            alert('没有数据源, 请设置数据源！')
        }
    },
    getSupportedEventList: function(profile) {
        return [{
            'id': 'onQrcodeClick',
            'name': locale('onQrcodeClick'),
            'des': "Triggered when qrcode click"
        }];
    },
    getSupportedVariableList: function(profile) {
        return [{
            name: 'QRCODE_CONTENT',
            type: 'string',
            des: locale('QRCODE_CONTENT')
        }];
    },
    getDependentVariableList: function(profile) {
        return [];
    }
};
Enhancer.registerWidgetConfigurator(configurator);