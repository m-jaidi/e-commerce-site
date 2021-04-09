import React from 'react'
import './SidebarShop.css'

const SidebarShop = () => {
    return (
        <div className="SidebarShop">
            <div className="sidebarList">
                <ul>
                    <h6>Jackets</h6>
                    <li>lorem ipsum</li>
                    <li>Dolor</li>
                    <li>Sit amet</li>
                    <li>Donec vitae</li>
                </ul>
                <ul>
                    <h6>Jean & chinos</h6>
                    <li>lorem ipsum</li>
                    <li>Dolor</li>
                    <li>Sit amet</li>
                    <li>Donec vitae</li>
                </ul>
                <ul>
                    <h6>Accessories</h6>
                    <li>lorem ipsum</li>
                    <li>Dolor</li>
                    <li>Sit amet</li>
                    <li>Donec vitae</li>
                </ul>
            </div>

            <hr />


            <div className="range">
                <label for="customRange2" class="form-label">PRICE</label>
                <input type="range" class="form-range" min="0" max="5" id="customRange2"></input>
            </div>

            <hr />




            <div className="input">
                <h6>BRANDS</h6>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Calvin Klein
                        </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Levi Strauss
                            </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Hugo Boss
                            </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Tomi Hifliger
                            </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Tom Ford
                            </label>
                </div>
            </div>
            

            <hr/>

            <div className="radio_button">
                <h6>SIZE</h6>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Small
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Medium
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Large
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        X-Large
                    </label>
                </div>
            </div>










        </div>
    )
}

export default SidebarShop
