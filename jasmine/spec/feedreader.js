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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined', function() {
            //Empty array to hold URLs of allFeeds
            var feedsUrls = [];

            //Loop through allFeeds variable and push into empty array
            for (var i = 0; i < allFeeds.length; i++) {
                feedsUrls.push(allFeeds[i].url);
            };

            //Test that allFeeds URLs to be defined
            expect(feedsUrls).toBeDefined();

            //Test that allFeeds Urls not to be empty
            expect(feedsUrls.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function() {
            //Empty array to hold names of allFeeds
            var feedsName = [];

            //Loop through allFeeds varialbe and push into empty array
            for (var i = 0; i < allFeeds.length; i++) {
                feedsName.push(allFeeds[i].name);
            };

            //Test that allFeeds names to be defined
            expect(feedsName).toBeDefined();

            //Test that allFeeds names not to be empty
            expect(feedsName.length).not.toBe(0);
        })
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('element is hidden by default', function() {
            //Store body element as a variable to test
            var menuHidden = $('body');

            //Test if body element has 'menu-hidden' class by default
            expect(menuHidden.hasClass('menu-hidden')).not.toBeFalsy();
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when menu icon is clicked', function() {
            //Store '.menu-icon-link' as a variable to test
            var menuClick = $('.menu-icon-link');

            //Trigger click on link
            menuClick.click();

            //Test if body doesn't have the class 'menu-hidden'
            expect($('body').hasClass('menu-hidden')).not.toBeTruthy();

            //Trigger click on link again
            menuClick.click();

            //Test if body does have the class 'menu-hidden'
            expect($('body').hasClass('menu-hidden')).not.toBeFalsy();
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        //Call loadFeed and its first entry asynchronously
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('has atleast one entry element within feed container', function() {
            //Test if entry is inside the feed container class
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection"*/
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

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('content changes and is unique', function(done) {
            //Call loadFeed function with new index
            loadFeed(1, function() {
                //Test if new feed differs from intial feed
                expect($('.feed').html() !== firstFeed).toBeTruthy();
                done();
            });
        });

        //Revert feed back to orginal feed
        afterEach(function(done) {
            loadFeed(0, done);
        });
    });
}());