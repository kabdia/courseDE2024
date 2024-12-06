import { PlaceSwitchGroup } from "#features/PlaceSwitchGroup";
import { Button } from "#shared/ui/Button/index";
import { CustomSelect } from "#shared/ui/CustomSelect/index";
import {
  CheckIcon,
  CancelIcon,
  BarIcon,
  CinemaIcon,
  RestIcon,
  MusicIcon,
  TheatreIcon,
} from "#shared/ui/Icons/index";

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
        <!--<div style="max-width: 279px">
          ${CustomSelect({
            extraAttrs: [{ name: "id", value: "select-type-mark" }],
            cfg: {
              preset: "default",
              itemSelectText: "",
              searchEnabled: false,
              choices: [
                {
                  value: "Бар",
                  label: "Бар",
                  selected: false,
                  customProperties: {
                    icon: BarIcon({ iconColor: "var(--colorRed)" }),
                  },
                },
                {
                  value: "Ресторан",
                  label: "Ресторан",
                  selected: true,
                  customProperties: {
                    icon: RestIcon({ iconColor: "var(--colorOrange)" }),
                  },
                },
                {
                  value: "Театр",
                  label: "Театр",
                  selected: false,
                  customProperties: {
                    icon: TheatreIcon({ iconColor: "var(--colorViolet)" }),
                  },
                },
                {
                  value: "Кино",
                  label: "Кино",
                  selected: false,
                  customProperties: {
                    icon: CinemaIcon({ iconColor: "var(--colorGreenLime)" }),
                  },
                },
                {
                  value: "Ночной клуб",
                  label: "Ночной клуб",
                  selected: false,
                  customProperties: {
                    icon: MusicIcon({ iconColor: "var(--colorBlueLight)" }),
                  },
                },
              ],
            },
          })}

          
        </div>-->
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
