!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function e(e,i){return"string"==typeof e&&"object"==typeof i&&t.each(i,function(t,i){e=e.replace("${"+String(t).toLowerCase()+"}",i)}),e}function i(e,o){this.$element=t(e),this.options=t.extend(!0,{},i.DEFAULTS,t.isPlainObject(o)&&o),this.loading=!1,this.init()}var o="qor.publish",l="click."+o;i.prototype={constructor:i,init:function(){this.$modal=t(e(i.MODAL,this.options.text)).appendTo("body"),this.bind()},bind:function(){this.$element.on(l,t.proxy(this.click,this))},unbind:function(){this.$element.off(l,this.click)},click:function(e){var o,l,s,d=this.options,a=t(e.target),n=t(".qor-js-table").find("input:checkbox").not(d.toggleCheck).is(":checked");if(a.is(d.submit)&&!n)return window.alert(a.data().noItem),!1;if(a.is(d.scheduleSetButton)&&(e.preventDefault(),s=t(d.scheduleTime).val(),s&&(t(".publish-schedule-time").val(s),n?t(d.submit).closest("form").submit():this.$scheduleModal.qorModal("hide"))),a.is(d.schedulePopoverButton)&&(o=a.data(),this.$scheduleModal&&this.$scheduleModal.remove(),this.$scheduleModal=t(window.Mustache.render(i.SCHEDULE,o)).appendTo("body"),this.$scheduleModal.qorModal("show"),l=t(d.scheduleTime),l.materialDatePicker({format:"YYYY-MM-DD HH:mm",minDate:new Date})),a.is(d.toggleView)){if(e.preventDefault(),this.loading)return;this.loading=!0,this.$modal.find(".mdl-card__supporting-text").empty().load(a.data("url"),t.proxy(this.show,this))}else a.is(d.toggleCheck)&&(a.prop("disabled")||a.closest("table").find("tbody :checkbox").click())},show:function(){this.loading=!1,this.$modal.qorModal("show")},destroy:function(){this.unbind(),this.$element.removeData(o)}},i.DEFAULTS={toggleView:".qor-js-view",toggleCheck:".qor-js-check-all",schedulePopoverButton:".qor-publish__button-popover",scheduleSetButton:".qor-publish__button-schedule",scheduleTime:".qor-publish__time",submit:".qor-publish__submit",text:{title:"Changes",close:"Close"}},i.SCHEDULE='<div class="qor-modal qor-modal-mini fade" tabindex="-1" role="dialog" aria-hidden="true"><div class="mdl-card mdl-shadow--4dp" role="document"><div class="mdl-card__title"><h2 class="mdl-card__title-text">[[modalTitle]]</h2></div><div class="mdl-card__supporting-text"><p class="hint">[[modalHint]]</p><input class="mdl-textfield__input qor-publish__time" type="text" /></div><div class="mdl-card__actions"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect qor-publish__button-schedule">[[modalSet]]</a><a class="mdl-button mdl-js-button mdl-js-ripple-effect" data-dismiss="modal">[[modalCancel]]</a></div></div></div>',i.MODAL='<div class="qor-modal fade" tabindex="-1" role="dialog" aria-hidden="true"><div class="mdl-card mdl-shadow--4dp" role="document"><div class="mdl-card__title"><h2 class="mdl-card__title-text">${title}</h2></div><div class="mdl-card__supporting-text"></div><div class="mdl-card__actions"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" data-dismiss="modal">${close}</a></div><div class="mdl-card__menu"><button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" data-dismiss="modal" aria-label="close"><i class="material-icons">close</i></button></div></div></div>',i.plugin=function(e){return this.each(function(){var l,s,d=t(this),a=d.data(o);if(!a){if(/destroy/.test(e))return;l=t.extend(!0,{text:d.data("text")},"object"==typeof e&&e),d.data(o,a=new i(this,l))}"string"==typeof e&&t.isFunction(s=a[e])&&s.apply(a)})},t(function(){i.plugin.call(t(".qor-theme-publish"))})});
//# sourceMappingURL=publish.js.map
