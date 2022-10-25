import { useState } from "react";
import './TabsKatalog.css'

function TabsKatalog() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="tab_cotae">
            <div className="containerTabs">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Общая инфо.
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        <p className="sorachem">Характеристики</p>
                        <p className="sorashenya">Харак-ки</p>
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Отзывы.
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h2>Ullamcorper at venenatis volutpat.</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pellentesque proin amet, netus pharetra mattis aliquam turpis. Ipsum, sodales elementum viverra molestie amet, purus convallis in mauris. Eu bibendum ipsum vulputate sapien hendrerit elementum. Dictumst ultrices ipsum dignissim nisi suspendisse tellus, eu amet sed. Sem elit eget viverra porttitor.
                            <br />  <br /> Sit porttitor vitae lorem mattis sit purus. Urna tellus massa quis non sodales dolor et faucibus eu. Donec aliquam amet condimentum suspendisse massa volutpat. Ullamcorper netus non venenatis facilisi velit bibendum aliquam est eget. Gravida sit ac, vulputate massa nunc sed sodales. Nulla aliquam blandit imperdiet iaculis.
                            <br /><br />    Nunc sit lacus porta diam. Non commodo in sed neque at sem. Dictum tellus magnis in rutrum diam suspendisse aliquam. Erat ullamcorper in nulla accumsan magna volutpat egestas. Montes, egestas cursus ornare vestibulum, augue sed mi, dui consectetur. Dui sem aliquet eu aliquam.
                        </p>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2>Ullamcorper at venenatis volutpat.</h2>
                        <hr />
                        <ul>
                            <li><span>Экран ...............</span>  1920x1080 (16:9), изогнутый</li>
                            <li><span>Тип матрицы ...............</span>  *VA</li>
                            <li><span>Частота обновления ...............</span>  165 Гц; отклик: 1 мс</li>
                            <li><span>Интерфейсы ...............</span>  вход DisplayPort, вход HDMI x 2, вход VGA</li>
                            <li><span>Яркость ...............</span>  250 кд/м²; контрастность: 4000:1</li>
                            <li><span>Поддержка ...............</span>  FreeSync/G-Sync FreeSync Premium</li>
                            <li><span>Особенности ...............</span>  встроенные колонки, поворот на 90 градусов</li>
                            <li><span>Покрытие экрана ...............</span>  антибликовое, матовое</li>
                        </ul>


                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2>Content 3</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabsKatalog;
