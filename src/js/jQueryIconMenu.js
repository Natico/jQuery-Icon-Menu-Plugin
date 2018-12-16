// Plugin definition.
$.fn.jqueryIconMenu = function (options) {

    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var opts = $.extend({}, $.fn.jqueryIconMenu.defaults, options);

    // Our plugin implementation code goes here.
    opts.direction == 'rtl' ? $(this).attr('data-direction', 'rtl') : '';
    opts.top ? $(this).css('top', opts.top + 'px') : '';

    var checkSubMenu = function (item) {
        return false;
    };

    var addSubMenu = function (item) {

    };

    var addTooltip = function (item) {
        var title = item.attr('title');

        if(title){
            var tooltip = $('<span class="jqueryIconMenu-tooltip">'+title+'</span>');
            tooltip.appendTo(item);
        }
    };

    var listItems = $(this).find('li');
    for (let li of listItems) {
        var item = $('a', li);

        var itemHasSubMenu = checkSubMenu(item);
        itemHasSubMenu ? addSubMenu(item) : addTooltip(item);


    }

};

// Plugin defaults – added as a property on our plugin function.
$.fn.jqueryIconMenu.defaults = {
    direction: "ltr",
    top: '0'
};