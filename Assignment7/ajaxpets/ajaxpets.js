/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
"use strict";
(function() {
  const BASEURL = 'https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php';
  window.addEventListener("load", init);

  /**
   * TODO: What do we need to initialize?
   */
  function init() {
    // TODO
    const radioKitty = qs('[value="kitty"]');
    const radioPuppy = qs('[value="puppy"]');

    radioKitty.addEventListener("click", function() {
      makeRequest("kitty");
    })

    radioPuppy.addEventListener("click", function() {
      makeRequest("puppy");
    })
  }

  /**
   * TODO: Fetch data from the CSE 154 ajax pets api!
   */
  async function makeRequest(query) {
    // TODO
    console.log("Making Request")
    try {
      let res = await fetch(BASEURL + "?animal=" + query);
      await checkStatus(res);
      res = await res.text();
    }
    catch (err) {
      console.log(err)
    }
  }

  /**
   * TODO: Implement any other functions you need
   */

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
