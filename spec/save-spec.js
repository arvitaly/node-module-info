var fixtures = require('fixture2')
var save = require('./../save');
describe("Save", () => {
    var f;
    beforeEach(() => {
        f = fixtures();
    })
    it("when func not saved, should call with object and return value", () => {
        expect(save(f("obj", { _saved: [] }), f("func", jasmine.createSpy().and.returnValue(f("value"))))).toBe(f("value"));
        expect(f("func").calls.allArgs()).toEqual([[f("obj")]]);
    })
    it("when func saved, should return saved value", () => {
        save(f("obj", { _saved: [] }), f("func", jasmine.createSpy().and.returnValue(f("value"))));
        f("func").and.returnValue(f("value2"));
        save(f("obj"), f("func2", jasmine.createSpy().and.returnValue(f("otherfuncValue"))));
        expect(save(f("obj"), f("func"))).toBe(f("value"));
        expect(f("func").calls.count()).toBe(1);
        expect(save(f("obj"), f("func2"))).toBe(f("otherfuncValue"));
    })
})