import './dist/coffeeForm.css'
import {handleSubmitEvent}  from '../../controllers/formHandler'


export function coffeeForm() {
  // onsubmit="handleSubmitEvent(event)"
    return `   <div class="form-wrapper">
        <div class="wrapper">
            <h1>Coffee Form</h1>
            <div class="form">
                <form action="" >
                    <div name="coffee" class="coffee-images">
                        <div class="img">
                            <img src="https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg" alt="coffee">
                            <input value="coffee-latte" type="checkbox" name="coffee" id="coffee-latte">
                        </div>
                        <div class="img">
                            <img src="https://leitesculinaria.com/wp-content/uploads/2023/03/cappuccino.jpg"
                                alt="coffee">
                            <input value="coffee-cappuccino" type="checkbox" name="coffee" id="coffee-cappuccino">
                        </div>
                        <div class="img">
                            <img src="https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg"
                                alt="coffee">
                            <input value="coffee-espresso" type="checkbox" name="coffee" id="coffee-espresso">
                        </div>
                    </div>
                    <div class="name">
                        <label>Name : </label>
                        <input type="text" for="name" id="name" placeholder="Enter Name">
                    </div>
                    <div class="coffee-type">
                        <label>Milk : </label>
                        <select name="type" id="type" required>
                            <option value="Enter Your Coffee Type" disabled selected>Enter Your Coffee Type</option>
                            <option value="No Milk">No Milk</option>
                            <option value="Whole Milk">Whole Milk</option>
                            <option value="Milk">Milk</option>
                            <option value="Soy Milk">Soy Milk</option>
                            <option value="Oat Milk">Oat Milk</option>
                        </select>
                    </div>
                    <div name="features" class="features">
                        <label>Features : </label>
                        <div class="strong">
                            <label>Strong</label>
                            <input type="checkbox" name="features" id="strong" value="strong">
                        </div>
                        <div class="no-sugar">
                            <label>No Sugar</label>
                            <input type="checkbox" name="features" id="no-sugar" value="no-sugar">
                        </div>

                    </div>
                    <div class="sugar">
                        <label >Sugar :</label>
                        <select name="sugar" id="sugar" required>
                            <option value="How Many Cup Of Sugar" disabled selected>How Many Cup Of Sugar</option>
                            <option value="1 Cup">1 Cup</option>
                            <option value="2 Cup">2 Cup</option>
                        </select>
                    </div>
                    <div class="size">
                        <div class="size-label">
                            <label>Size :</label>
                        </div>
                        <fieldset>
                            <input type="radio" name="size" id="small" value="small">
                            <label for="small">Small</label>
                            <input type="radio" id="medium" name="size" value="medium">
                            <label for="medium">Medium</label>
                            <input type="radio" id="large" name="size" value="large">
                            <label for="large">Large</label>
                        </fieldset>

                    </div>
                    <div class="submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>`
}


document.addEventListener('submit', handleSubmitEvent)