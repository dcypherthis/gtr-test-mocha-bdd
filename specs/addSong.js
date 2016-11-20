"use strict";

import container from './container';
let _page;

describe('Adding a song to my Practice List', function () {

    let _route = new container.Router();
    const _auth = new container.Auth();


    before('Logging in as default user', function () {
        const accountType = 'default';
        _page = new container.Login_page();
        _page.navigate();
        _auth.login(accountType);
    });

    it('Navigate to the the Songs Page', function () {
        const target = 'Songs';
        _page = _route.setContext(target);
        _page.navigate(target);
        expect(_page.isOnPage(), `Should be on the ${target} page, but was unable to verify`).to.be.true;
        });

    it('click the "Plus Sign"', function () {
        const target = 'Plus Sign';
        _page = _route.getContext();
        _page.waitAndClick(target);
    });

    it('enter "St Lucia" for the "Artist" input', function () {
        const value = 'St Lucia';
        const target = 'Artist';
        _page = _route.getContext();
        _page.enterInput(target, value);
    });

    it('enter "Elevate" for the "Song Title" input', function () {
        const value = 'Elevate';
        const target = 'Song Title';
        _page = _route.getContext();
        _page.enterInput(target, value);
    });

    it('enter "https://open.spotify.com/track/5BxVRqpZi6tIhAap1ZjzVD" for the "Spotify Url" input', function () {
        const value = 'https://open.spotify.com/track/5BxVRqpZi6tIhAap1ZjzVD';
        const target = 'Spotify Url';
        _page = _route.getContext();
        _page.enterInput(target, value);
    });

    it('click "Save"', function () {
        const target = 'Save';
        _page = _route.getContext();
        _page.waitAndClick(target);
    });

    it('should be on the "Songs" page"', function () {
        const target = 'Songs';
        _page = _route.setContext(target);
        expect(_page.isOnPage(), `Should be on the ${target} page, but was unable to verify`).to.be.true;
    });

    it('should see the "Song Added Message"', function () {
        const target = 'Song Added Message';
        _page = _route.getContext();
        expect(_page.checkVisibility(target, true), `Expected ${target} to be visible.`).to.be.true;
    });
});