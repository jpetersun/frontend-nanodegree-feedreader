/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



        it('URLs are defined and are not empty', function() {

            //Loop through allFeeds variable to test URLs
            var len = allFeeds.length;
            for(var i = 0; i < len; i++) {
                //Test that URLs are defined.
                expect(allFeeds[i].url).toBeDefined();

                //Test that URLs length isn't 0.
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        it('names are defined and are not empty', function() {
            //Loop through allFeeds variable to test Names
            var len = allFeeds.length;
            for (var i = 0; i < len; i++) {
                //Test that Names are defined.
                expect(allFeeds[i].name).toBeDefined();
                //Test that Names length isn't 0.
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {


        it('element is hidden by default', function() {
            //Store body element as a variable to test
            var $menuHidden = $('body');

            //Test if body element has 'menu-hidden' class by default
            expect($menuHidden.hasClass('menu-hidden')).toBeTruthy();
        });


        it('changes visibility when menu icon is clicked', function() {
            //Store '.menu-icon-link' as a variable to test
            var $menuClick = $('.menu-icon-link');

            //Trigger click on link
            $menuClick.click();

            //Test if body doesn't have the class 'menu-hidden'
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            //Trigger click on link again
            $menuClick.click();

            //Test if body does have the class 'menu-hidden'
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function() {
        //Call loadFeed and its first entry asynchronously
        beforeEach(function(done) {
            loadFeed(0, done);
        });


        it('has at least one entry element within feed container', function() {
            //Test if entry is inside the feed container class
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function() {
        //Store initial feed
        var firstFeed;

        //Call loadFeed function asynchronously and store intial feed
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = $('.feed').html();
                done();
            });
        });


        it('content changes and is unique', function(done) {
            //Call loadFeed function with new index
            loadFeed(1, function() {
                //Test if new feed differs from intial feed
                expect($('.feed').html()).not.toEqual(firstFeed);
                done();
            });
        });

        //Revert feed back to orginal feed
        afterEach(function(done) {
            loadFeed(0, done);
        });
    });
}());