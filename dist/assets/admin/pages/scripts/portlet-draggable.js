var PortletDraggable = function () {

    return {
        //main function to initiate the module
        init: function () {

            if (!jQuery().sortable) {
                return;
            }

            $("#sortable_portlets").sortable({
                connectWith: ".portlet",
                items: ".portlet", 
                opacity: 0.8,
                handle : '.portlet-title',
                coneHelperSize: true,
                placeholder: 'portlet-sortable-placeholder',
                forcePlaceholderSize: true,
                tolerance: "pointer",
                helper: "clone",
                tolerance: "pointer",
                forcePlaceholderSize: !0,
                helper: "clone",
                cancel: ".portlet-sortable-empty, .portlet-fullscreen", // cancel dragging if portlet is in fullscreen mode
                revert: 250, // animation in milliseconds
                update: function(b, c) {
                    if (c.item.prev().hasClass("portlet-sortable-empty")) {
                        c.item.prev().before(c.item);
                    }                    
                }
            });
			$('#sortable_portlets').portlet('option', 'add', {
				position: {
				  x: 0,
				  y: 1
					},
					portlet: {
						attrs: {
							id: 'news'
						},
						title: 'News（亲，我是被动态添加的呦）',
						afterCreated: function() {
							alert('动态创建了News。。。');
						},
						content: {
							style: {
								height: '100'
							},
							type: 'text',
							text: function() {
								return $('#newsTemplate').html();
							}
						}
					}
				  });
        }
    };
}();