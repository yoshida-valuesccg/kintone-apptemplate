import locale from 'element-ui/lib/locale/lang/ja';
import Button from './components/Button.vue';
import './style.scss';

Vue.use(ELEMENT, { locale });

let vm1;

kintone.events.on('app.record.index.show', (event) => {

    const headerMenuEl = kintone.app.getHeaderMenuSpaceElement();

    if (vm1) {
        vm1.$destroy();
        vm1.$el.parentNode.removeChild(vm1.$el);
    }

    const el = document.createElement('div');
    headerMenuEl.appendChild(el);

    vm1 = new Vue({
        el,
        render: h => h(Button, {
            props: { event }
        })
    });

    return event;

});
