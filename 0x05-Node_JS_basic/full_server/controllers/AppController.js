/**
 * Contains the miscellaneous route handlers.
 * @author Sebastian Kimanzi <https://github.com/seb-art>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
