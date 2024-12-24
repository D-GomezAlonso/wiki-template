import SiteLogo from "./assets/Site-logo.webp";
import Mechanics from "./assets/Mechanics.webp";
import Upgrades from "./assets/Upgrades.webp";
import Pickups from "./assets/Pickups.webp";
import Loadout from "./assets/Loadout.webp";
import Sectors from "./assets/Sectors.webp";
import Enemies from "./assets/Enemies.webp";
import Bosses from "./assets/Bosses.webp";
import Secrets from "./assets/Secrets.webp";
import Lore from "./assets/Lore.webp";
import Music from "./assets/Music.webp";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="h-full w-full bg-site-background text-white">
      <div className="h-full max-w-screen-xl mx-auto px-12">
        <div className="flex flex-col h-full">
          <img src={SiteLogo} className="lg:max-h-40 object-contain" />
          <div className="flex flex-col border border-body border-b-0 h-full w-full">
            <ul className="flex w-full h-10 bg-navbar border-b border-body items-center p-5">
              <li>Home</li>
            </ul>
            <div className="flex flex-col h-full bg-main px-12 py-7 gap-12">
              <Card>
                <>
                  <span className="text-center text-2xl">
                    Welcome to the Picayune Dreams Wiki
                  </span>
                  <p className="text-center">
                    A fan made comprehensive source of information about the
                    game. Currently we have 124 articles, and 56 pages.
                  </p>
                </>
              </Card>

              <Card headerText="About">
                <p className="px-5">
                  Lost in the endless expanse of space, you must fight off
                  endless hordes of inter-dimensional beings to claim a few more
                  brief moments of life. Picayune Dreams will challenge your
                  skill, endurance, and perseverance through a mind warping,
                  psychedelic, bullet hell nightmare. This psychedelic,
                  space-faring action roguelike looks to merge the best elements
                  of Bullet Heavens + Bullet Hells.
                </p>
              </Card>

              <div className="flex justify-between">
                <Card headerText="Main Features">
                  <div className="grid grid-rows-2 grid-cols-5 px-12 gap-[10px]">
                    <div>
                      <p className="text-center">Mechanics</p>
                      <img src={Mechanics} />
                    </div>
                    <div>
                      <p className="text-center">Upgrades</p>
                      <img src={Upgrades} />
                    </div>
                    <div>
                      <p className="text-center">Pickups</p>
                      <img src={Pickups} />
                    </div>
                    <div>
                      <p className="text-center">Loadout</p>
                      <img src={Loadout} />
                    </div>
                    <div>
                      <p className="text-center">Sectors</p>
                      <img src={Sectors} />
                    </div>
                    <div>
                      <p className="text-center">Enemies</p>
                      <img src={Enemies} />
                    </div>
                    <div>
                      <p className="text-center">Bosses</p>
                      <img src={Bosses} />
                    </div>
                    <div>
                      <p className="text-center">Secrets</p>
                      <img src={Secrets} />
                    </div>
                    <div>
                      <p className="text-center">Lore</p>
                      <img src={Lore} />
                    </div>
                    <div>
                      <p className="text-center">Music</p>
                      <img src={Music} />
                    </div>
                  </div>
                </Card>
                <Card headerText="Trailer">
                  <div className="px-7">
                    <iframe
                      width="406"
                      height="205"
                      src="https://www.youtube.com/embed/ZJlCkcemPGU?si=HtUFjQzNwYOk-Cvy"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
