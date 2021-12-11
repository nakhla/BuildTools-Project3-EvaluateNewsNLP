import {validURL} from '../src/client/js/urlChecker'

describe('urlChecker module', () => {
    it ('function validURL exists', ()=>{
        expect(validURL).toBeDefined()
    })

    it ('urlChecker returns true for all valid urls', ()=>{
        const urls = [
            'http://www.gomgaz.gr',
            'www.f.co',
            'https://www.bc.com',
            'http://werer.gr',
            'https://www.f.co',
            'http://www.f.co',
            'www.bc.com',
            'http://bc.com',
            'http://g.co',
            'https://www.gomgaz.gr',
            'www.gomgaz.gr',
            'www.udacity.com',
            'http://www.bc.com',
            'http://www.gomgaz.gr/fake',
            'http://gomgaz.gr',
          ];

          urls.forEach(url => {
              expect(validURL(url)).toBeTruthy();
          } )
          
    })

    it ('urlChecker returns false for all invalid urls', ()=>{
        const urls = [
            'www.gomgaz',
            'www.gomgaz-.gr',
            'www.+gomgaz.gr',
            'gomgaz.gr',
            'http://www.gomgaz',
            'http://gomgaz',
            'udacity',
          ];

          urls.forEach(url => {
              expect(validURL(url)).toBeFalsy();
          } )
          
    })
})
