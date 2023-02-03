import { shallowMount } from "@vue/test-utils"
import Indecision from "@/components/Indecision";

describe('Pruebas de componente Indecision',() => {
    let wrapper;
    let clgSpy;
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image:  'https://yesno.wtf/assets/yes/2.gif'
        })
    }))
    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console,'log');

        jest.clearAllMocks();
    });

    test('Debe hacer un match con el snapchot',() => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    test("Escribir en el input no debe disparar nada!",async () => {
        const getAnwerSpy = jest.spyOn(wrapper.vm,'getAnswer');
        const input = wrapper.find('input');
        await input.setValue('Hola mundo');
        expect(clgSpy).toHaveBeenCalled();
        expect(getAnwerSpy).not.toHaveBeenCalled();
        //expect(getAnwerSpy).toHaveBeenCalledTimes(0);
    });
    test('Escribir el simbolo de "?" debe de disparar el fetch',async () => {
        const getAnwerSpy = jest.spyOn(wrapper.vm,'getAnswer');
        const input = wrapper.find('input');
        await input.setValue("Hola mundo?");

        expect(clgSpy).toHaveBeenCalled();
        expect(getAnwerSpy).toHaveBeenCalledTimes(1);
    });
    test('Pruebas en el getAnswer',async () => {
        await wrapper.vm.getAnswer();

        console.log(wrapper.vm.img);
        console.log(wrapper.vm.answer);

        const img = wrapper.find('img');
        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect(wrapper.vm.answer).toBe('yes');
    });
    test('Pruebas en el getAnswer - Fallo en el API',async () => {
        fetch.mockImplementationOnce(() => Promise.reject('API is down'))
        
        await wrapper.vm.getAnswer();
        const img = wrapper.find('img');

        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe("No se pudo cargar del API");
    });
});