import { PlaceSwitchGroup } from "#features/PlaceSwitchGroup";
/**
 * Страница приложения
 * @return {string}
 */
const IndexPage = () => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home Page</title>
    </head>
    <body>
      <header>        
      </header>
      <main> 
        
        ${PlaceSwitchGroup()}
        <div class="main__yandexMap">
          <div id="map1" class="yandexMap__cart"></div>          
        </div>      
        </main>

        <form>
        </form>

         
      </div>
    </body>
  </html>
`;

export default IndexPage;
