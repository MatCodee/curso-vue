import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter.vue";

describe('Counter Component',() => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })
    /*
    test('Debe de hacer match con el snapchot',()=>{
        const wrapper = shallowMount(Counter);
        expect(wrapper.html()).toMatchSnapshot();

    });
    */
   test('h2 debe tener el valor por defecto "Counter"',()=>{        
        expect(wrapper.find('h2').exists()).toBe(true);
        const test_h2 = wrapper.find('h2');

        //console.log(test_h2.text());

        expect(test_h2.text()).toBe('Counter')
   });
   test('El valor por defecto debe ser 100 en el p',() => {
        expect(wrapper.find('[data-textid="counter"]').text()).toBe('100');
   });

   test('Incrementar y decrementar el contador',async () => {
        const [increaseBtn,decreaseBtn] = wrapper.findAll('button');
        
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        expect(wrapper.find('[data-textid="counter"]').text()).toBe('101');
   });

   test('Debe establece rle valor por defecto',() => {
        const { initial_counter } = wrapper.props();
        const value = wrapper.find('[data-textid="counter"]').text();
        expect(Number(value)).toBe(initial_counter);
   });
   test('Debe de mostrar la prop title',() => {
        const wrapper = shallowMount(Counter, {
            props: {
                msg: "Hola mundo",
            }
        });
        expect(wrapper.find('h2').text()).toBe("Hola mundo");
   });

});