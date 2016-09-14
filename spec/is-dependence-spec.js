describe("Is dependence", ()=>{
    it("when caller setted and not absolute and not relative and not system should return true", ()=>{
        var isDependence = require('./../is-dependence');
        expect(isDependence({isAbsolute:()=>false,isRelative:()=>false,isSystem:()=>false,_caller:"is"})).toBe(true);
    })
    it("when caller not setted and not absolute and not relative and not system should return false", ()=>{
        var isDependence = require('./../is-dependence');
        expect(isDependence({isAbsolute:()=>false,isRelative:()=>false,isSystem:()=>false})).toBe(false);
    })    
})