function Demo33()
{
    return(
        <div className="para">
         <div>
                <h2>Double the below array numbers</h2>
                <p id="orignalarr"></p>
                <p>Now we have the double array</p>
                <p id="doublearr"></p>
            </div>
            <hr></hr>
            {/* <!-- ------------------------------convert the integer array to string array and print -------------------------------------------> */}
            <div>
                <h2 style={{color: 'red'}}>Convert the below array numbers to string</h2>
                <p id="numbersArray" className="container"></p>
                <p>Now we have the string array</p>
                <p id="stringArray"></p>
        
            </div>
            <hr></hr>
             {/* <!-- --------------------------convert the element of array to uppercase and print -------------------------------------> */}
             <div>
                <h2>Convert each element to uppercase</h2>
                <p id="lowerCase"></p>
                <p>Now we have the updated array</p>
                <p id="upperCase"></p>
            </div>
            <hr></hr>
            {/* <!-- -------------------------make sum of each element  and print -------------------------> */}
            <div>
                <h2>Make Sum Of Each Element</h2>
                Enter The Array in Textbox &nbsp;
                <input type="text" id="sum_Num"  style="height: 25px;" width="20%" placeholder="Inter Your Array Here" />&nbsp;&nbsp;
                <button onclick="sumNumbers()" class="button button3">Click Here</button>
                <br></br>
                After Clicking Button The Modified Array is Below
                <p id="sum_digits"></p>
            </div>
            <hr></hr>
        
            {/* <!-- ----------------------------calculate mean and median and print ---------------------------> */}
            <div>
                <h2>Calculate Mean Of Elements Of Array</h2>
                Enter The Array For Mean &nbsp;
                <input type="text" id="meanNumbers"  style="height: 25px;" width="20%" placeholder="Inter Your Array For Mean" />&nbsp;&nbsp;
                <button onclick="mean_OfNumbers()" class="button button3">Click Here</button>
                <br></br>
                After Clicking Button The Modified Array is Below
                <p id="mean_digits"></p>
                <h2>Calculate Median Of Elements Of Array</h2>
                Enter The Array For Median &nbsp;
                <input type="text" id="medianNumbers"  style="height: 25px;" width="20%" placeholder="Inter Your Array For Med" />&nbsp;&nbsp;
                <button id="calculateMedianButton" class="button button3">Click Here</button>
                <br></br>
                After Clicking Button The Modified Array is Below
                <p id="median_digits"></p>
            </div>
            <hr />
            {/* <!-- ----------------------------------Get the initials and print --------------------------------> */}
            <div>
            <h2>Get The Initials Of The Array And Join It</h2>
            Enter The Array Without [] Brackets &nbsp;
            <input type="text" id="initials"  style="height: 25px;" width="20%" placeholder="Inter Your Array Without []" />&nbsp;&nbsp;
            <button onclick="initials_String()" class="button button3">Click Here</button>
            <br />
            After Clicking Button The Modified Array is Below
            <p id="initials_text"></p>
            </div>
            <hr />
        
             {/* <!-- ------------------Find largest age and minus smallest age and print -----------------------> */}
            <div>
                <h2>Calculating Difference of Ages Between Oldest and Youngest</h2>
                <p style="line-height: 23px;">Enter the ages Of your family that greater than 40 <br />
                     In array form like [item1,itme2,etc]</p> &nbsp;&nbsp;&nbsp;
                <input type="text" id="ageOldest"  style="height: 25px;" width="20%" placeholder="Inter Your Array Wit [ ]" />
                <br />
               <p style="line-height: 23px;"> Enter the ages of your family that less 40 <br /> 
                  In array form like [item1,itme2,etc]</p>&nbsp;
                <input type="text" id="ageYoungest"  style="height: 25px;" width="20%" placeholder="Inter Your Array With [ ]" /><br /><br />
                &nbsp;&nbsp;
                <button onclick="largest_InAge()" class="button button3">Click Here</button>
                <br /><br />
                After Clicking Button The Result is Below
                <p id="oldest_text"></p>
                <p id="youngest"></p>
                <p id="result_text"></p>
                </div>
                <hr />
        
                {/* <!-- ----------Find the numbers that greater or equal to 5 and print ----------------> */}
                <div>
                    <h2>Find the numbers that greater or equal to 5</h2>
                    Enter The Array Here &nbsp;
                    <input type="text" id="greater_five"  style="height: 25px;" width="20%" placeholder="Inter Your Array With [ ]" />&nbsp;&nbsp;
                    <button onclick="greaterThan_Five()" class="button button3">Click Here</button>
                    <br />
                    After Clicking Button The Modified Array is Below
                    <p id="greater_text"></p>
                    </div>
                    <hr />
                        {/* <!-- -----------------Find the even numbers and print ----------------------------> */}
                    <div>
                        <h2>Find the even numbers </h2>
                        Enter The Array Here &nbsp;
                        <input type="text" id="even_nums"  style="height: 25px;" width="20%" placeholder="Inter Your Array With [ ]" />&nbsp;&nbsp;
                        <button onclick="even_Numbers22()" class="button button3">Click Here</button>
                        <br />
                        After Clicking Button The Modified Array is Below
                        <p id="evennumbers_text"></p>
                        </div>
                        <hr />
        
                         {/* <!-- -----------Find the length of string that 5 or small and print --------------------> */}
                        <div>
                            <h2>Find the length of string that are 5 or less </h2>
                            Enter The Array Here &nbsp;
                            <input type="text" id="lengtharray"  style="height: 25px;" width="20%" placeholder="Inter Your Array With [ ]" />&nbsp;&nbsp;
                            <button onclick="array_Length()" class="button button3">Click Here</button>
                            <br />
                            After Clicking Button The Modified Array is Below
                            <p id="arr_text"></p>
                            </div>
                            <hr />
        
            </div>



        )
        
    
}
export default Demo33;