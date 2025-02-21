import { useState, useEffect, useRef } from "react";
import Dropdown from "../reusable-components/dropdown";

export default function Calculator() {
    const [selectedData, setSelectedData] = useState({});
    const [result, setResult] = useState({ value: "", interpretation: "", cm: "", ft: "", inch: "", kg: "", lbs: "" });
    const [loading, setLoading] = useState(false);

    const useRefs = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
    ];

    const dropdowns = [
        {
            id: 0, data: [
                { id: 0, label: "Male" },
                { id: 1, label: "Female" }
            ],
            placeholder: "Gender",
            defaultItem: { id: 0, label: "Male" }
        },
        {
            id: 1, data: [
                { id: 0, label: "BMI (Body Mass Index)" },
                { id: 1, label: "BMR (Basal Metabolic Rate)" },
                { id: 2, label: "RMR (RESTING METABOLIC RATE)" },
                { id: 3, label: "HEIGHT/WEIGHT CONVERTOR" },
                { id: 4, label: "CALORIE" },
                { id: 5, label: "TDEE (Total Daily Energy Expenditure)" },
                { id: 6, label: "WATER INTAKE" },
                { id: 7, label: "CARBOHYDRATE INTAKE" },
                { id: 8, label: "FAT INTAKE" },
                { id: 9, label: "BODY FAT PERCENTAGE" },
                { id: 10, label: "MACRO NUTRIENTS" },
                { id: 11, label: "VO2 MAX" },

            ],
            placeholder: "Activity",
            defaultItem: { id: 0, label: "BMI (Body Mass Index)" }
        },
        {
            id: 2, data: [
                { id: 0, label: "cm" },
                { id: 1, label: "m" }
            ],
            placeholder: "Height Unit",
            defaultItem: { id: 0, label: "cm" }
        },
        {
            id: 3, data: [
                { id: 0, label: "kg" },
                { id: 1, label: "lbs" }
            ],
            placeholder: "Weight Unit",
            defaultItem: { id: 0, label: "kg" }
        },
        {
            id: 4, data: [
                { id: 0, label: 'Fat Loss' },
                { id: 1, label: 'Maintenance' },
                { id: 2, label: 'Muscle Gains' },
            ],
            placeholder: 'Goal',
            defaultItem: { id: 1, label: 'Maintenance' }
        },
        {
            id: 5, data: [
                { id: 0, label: 'Sedentary (little or no exercise)' },
                { id: 1, label: 'Lightly active (light exercise or sports 1-3 days a week)' },
                { id: 2, label: 'Moderately active (moderate exercise or sports 3-5 days a week)' },
                { id: 3, label: 'Very active (hard exercise or sports 6-7 days a week)' },
                { id: 4, label: 'Super active (very hard exercise, physical job, or training twice a day)' },
            ],
            placeholder: 'Activity Level',
            defaultItem: { id: 1, label: 'Lightly active (light exercise or sports 1-3 days a week)' }
        },
        {
            id: 6, data: [
                { id: 0, label: 'Hot' },
                { id: 1, label: 'Cold' },
                { id: 2, label: 'Dry' },
                { id: 3, label: 'Humid' },
            ],
            placeholder: 'Climate',
            defaultItem: { id: 0, label: 'Hot' }
        }
    ];

    useEffect(() => {
        dropdowns.forEach(dropdown => {
            const defaultItem = dropdown.defaultItem;
            if (defaultItem) {
                handleDropdownChange(dropdown.id, defaultItem);
            }
        });
    }, []);

    const handleDropdownChange = (dropdownId, selectedItem) => {
        setSelectedData(prevData => ({
            ...prevData,
            [dropdownId]: selectedItem
        }));
        setResult({ value: '' });
    };

    const gender = selectedData[0]?.label || null;
    const fitnessActivity = selectedData[1]?.label || null;
    const goal = selectedData[4]?.label || null;
    const activityLevel = selectedData[5];
    const climate = selectedData[6]?.label || null;
    
    let fitnessActivityLabel = fitnessActivity;
    fitnessActivity?.includes(' (') ? fitnessActivityLabel = fitnessActivity.substring(0, fitnessActivity.indexOf(' (')) : null;
    
    const calculate = (event) => {
        event.preventDefault();
        setLoading(true);
        
        setTimeout(() => {
            const height = parseFloat?.(useRefs[0]?.current?.value) || null,
            weight = parseFloat?.(useRefs[1]?.current?.value) || null,
            age = parseFloat?.(useRefs[2]?.current?.value) || null,
            rhrPerMinute = parseFloat?.(useRefs[3]?.current?.value) || null;

            if (weight && height && age) {
                const heightInMeters = selectedData[2]?.label === 'cm' ? height / 100 : height;
                const weightInKg = selectedData[3]?.label === 'lbs' ? weight / 2.20462 : weight;

                const activityFunctions = {
                    'BMI': () => calculateBMIValue(weightInKg, heightInMeters),
                    'BMR': () => calculateBMRValue(weightInKg, heightInMeters, gender, age),
                    'CALORIE': () => calculateTDEEValue(age, gender, weightInKg, heightInMeters, activityLevel, goal),
                    'TDEE': () => calculateTDEEValue(age, gender, weightInKg, heightInMeters, activityLevel, goal),
                    'WATER INTAKE': () => calculateWaterIntake(age, weightInKg, heightInMeters, gender, activityLevel, climate),
                    'RMR': () => calculateRMR(weightInKg, heightInMeters, age, gender),
                    'CARBOHYDRATE INTAKE': () => calculateCarbohydrateIntake(age, gender, weightInKg, heightInMeters, goal, activityLevel),
                    'FAT INTAKE': () => calculateFatIntake(age, gender, weightInKg, heightInMeters, goal, activityLevel),
                    'BODY FAT PERCENTAGE': () => calculateFatPercentage(age, gender, weightInKg, heightInMeters),
                    'MACRO NUTRIENTS': () => calculateMacroNutrient(age, gender, weightInKg, heightInMeters, activityLevel, goal),
                    'VO2 MAX': () => calculateVO2Max(age, rhrPerMinute),
                };

                const result = activityFunctions[fitnessActivityLabel] ? activityFunctions[fitnessActivityLabel]() : null;

                setResult({ value: result.value, interpretation: result.interpretation });
                setLoading(false);
            } else {
                setLoading(false);
            }
        }, 1000);
    };

    const calculateBMIValue = (weight, height) => {
        const bmiValue = weight / (height ** 2);
        const interpretation = (bmiValue < 18.5) ? 'Underweight' : (bmiValue < 25) ? 'Normal weight' : (bmiValue < 30) ? 'Overweight' : 'Obese';

        return { value: bmiValue.toFixed(2), interpretation };
    };

    const calculateBMRValue = (weight, height, gender, age) => {
        const bmr = (gender === 'Male') ? (10 * weight) + (6.25 * (height * 100)) - (5 * age) + 5 : (10 * weight) + (6.25 * (height * 100)) - (5 * age) - 161;

        return { value: bmr.toFixed(2), interpretation: `BMR: ${bmr}` };
    };

    const calculateRMR = (weight, height, age, gender) => {
        const rmr = (gender === 'Male') ? (9.99 * weight) + (6.25 * (height * 100)) - (4.92 * age) + 5 : (10 * weight) + (6.25 * (height * 100)) - (5 * age) - 161;

        return { value: rmr.toFixed(2), interpretation: `RMR: ${rmr.toFixed(0)} CALORIES/DAY` };
    };

    const calculateTDEEValue = (age, gender, weight, height, activityLevel, goal) => {
        if (age && gender && height && weight && activityLevel) {
            const bmr = (calculateBMRValue(weight, height, gender, age)).value;

            const activityFactors = {
                0: 1.2,
                1: 1.375,
                2: 1.55,
                3: 1.725,
                4: 1.9
            };
            const activityFactor = activityFactors[activityLevel.id] || 1.2;

            let calculatedValue = bmr * activityFactor;

            if (goal === "Fat Loss") fitnessActivityLabel === 'TDEE' ? calculatedValue *= 0.9 : calculatedValue -= 500;
            else if (goal === "Muscle Gains") fitnessActivityLabel === 'TDEE' ? calculatedValue *= 1.4 : calculatedValue += 250;
            else calculatedValue;

            let finalValue = Math.round(calculatedValue);

            const interpretation = fitnessActivityLabel === 'TDEE' ? `TDEE: ${finalValue}` : `Daily Intake: ${finalValue} Calories/Day`;

            return { value: finalValue, interpretation };
        }
    };

    const calculateWaterIntake = (age, weight, height, gender, activityLevel, climate) => {
        const bmr = (calculateBMRValue(weight, height, gender, age)).value;

        const activityFactors = {
            0: 1.2,
            1: 1.375,
            2: 1.55,
            3: 1.725,
            4: 1.9
        };

        const activityFactor = activityFactors[activityLevel.id] || 1.2; // Default to sedentary        

        let climateAdjustment = 1;

        climateAdjustment = (climate === 'Hot' || climate === 'Dry') ? 1.2 : (climate === 'Humid') ? 1.0 : (climate === 'Cold') ? 0.8 : 1;

        const waterIntakeOz = Math.round(bmr * activityFactor * climateAdjustment * 0.033814); // Convert mL to ounces

        return { value: waterIntakeOz, interpretation: `WATER INTAKE: ${waterIntakeOz} OZ (OR) ${(waterIntakeOz / 33.814).toFixed(2)} L` }
    };

    const calculateCarbohydrateIntake = (age, gender, weight, height, goal, activityLevel) => {
        const bmr = (calculateBMRValue(weight, height, gender, age)).value;

        const activityLevels = {
            0: { activityMultiplier: 1.38, carbohydratePercentage: 55 }, // Sedentary
            1: { activityMultiplier: 1.55, carbohydratePercentage: 60 }, // Lightly active
            2: { activityMultiplier: 1.73, carbohydratePercentage: 65 }, // Moderately active
            3: { activityMultiplier: 1.9, carbohydratePercentage: 70 }, // Very active
            4: { activityMultiplier: 2.2, carbohydratePercentage: 75 }, // Super active
        };

        const activityLevelData = activityLevels[activityLevel.id] || activityLevels[0];

        const { activityMultiplier, carbohydratePercentage } = activityLevelData;

        let dailyCalories = bmr * activityMultiplier;

        const goalAdjustments = {
            'Fat Loss': -500,
            'Maintenance': 0,
            'Muscle Gains': 600,
        };

        const goalAdjustment = goalAdjustments[goal] || 0;
        dailyCalories += goalAdjustment;

        // Calculate carbohydrate intake based on percentage of daily calories
        const carbohydrateIntake = Math.round((carbohydratePercentage / 1000) * dailyCalories);

        return { value: carbohydrateIntake, interpretation: `Your recommended carbohydrate intake: ${carbohydrateIntake} grams/day` };
    };

    const calculateFatIntake = (age, gender, weight, height, goal, activityLevel) => {
        const bmr = (calculateBMRValue(weight, height, gender, age)).value;

        const activityLevels = {
            0: { activityMultiplier: 1.2, fatPercentage: 10 }, // Sedentary
            1: { activityMultiplier: 1.38, fatPercentage: 15 }, // Lightly active
            2: { activityMultiplier: 1.49, fatPercentage: 20 }, // Moderately active
            3: { activityMultiplier: 1.68, fatPercentage: 25 }, // Very active
            4: { activityMultiplier: 1.87, fatPercentage: 30 }, // Super active
            default: { activityMultiplier: 1.2, fatPercentage: 20 }, // Default
        };

        const { activityMultiplier, fatPercentage } = activityLevels[activityLevel.id] || activityLevels.default;


        let dailyCalories = bmr * activityMultiplier;

        const goalAdjustments = {
            'Fat Loss': -500,
            'Maintenance': 0,
            'Muscle Gains': 600,
        };

        const goalAdjustment = goalAdjustments[goal] || 0;
        dailyCalories += goalAdjustment;

        // Calculate fat intake based on percentage of daily calories
        const fatIntake = Math.round((fatPercentage / 1000) * dailyCalories);

        return { value: fatIntake, interpretation: `Fat intake: ${fatIntake} grams/day` };
    };

    const calculateFatPercentage = (age, gender, weight, height) => {
        let bmi = weight / (height ** 2);

        let bodyFat = (gender == "Male") ? (1.20 * bmi) + (0.23 * age) - 16.2 : (1.20 * bmi) + (0.23 * age) - 5.4;

        return { value: bodyFat.toFixed(2), interpretation: `Fat Percentage: ${bodyFat.toFixed(2)}%` };
    };

    const calculateMacroNutrient = (age, gender, weight, height, activityLevel, goal) => {
        const tdee = calculateTDEEValue(age, gender, weight, height, activityLevel, goal);

        // Calculate macro split (40/40/20)
        const proteinCalories = tdee.value * 0.4;
        const carbCalories = tdee.value * 0.4;
        const fatCalories = tdee.value * 0.2;

        // Calculate grams for each macro
        const proteinGrams = Math.round(proteinCalories / 4);
        const carbGrams = Math.round(carbCalories / 4);
        const fatGrams = Math.round(fatCalories / 9);

        const value = `${proteinGrams}, ${carbGrams}, ${fatGrams}`;
        const interpretation = `Protein - ${proteinGrams} g , 
                                Carbs - ${carbGrams} g , 
                                Fat - ${fatGrams} g`;

        return { value, interpretation };
    };

    const calculateVO2Max = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            const age = parseFloat?.(useRefs[2].current.value),
                rhrPerMin = parseFloat?.(useRefs[3].current.value);
            const mhrPerMin = 220 - age;
            const vo2max = (15 * (mhrPerMin / rhrPerMin)).toFixed(2);

            setResult({ value: vo2max, interpretation: `VO2 Max Without a Fitness Test: ${vo2max} mL/kg/min` });
            setLoading(false);
        }, 500);

    }

    const convertToFtInch = () => {
        const cm = parseFloat(useRefs[4].current.value);
        const ft = parseInt((cm / 2.54) / 12);
        const inch = ((cm / 2.54) % 12).toFixed(2);
        setResult({ ft: ft, inch: inch });
    };

    const convertToCm = () => {
        const ft = parseFloat(useRefs[5].current.value), inch = parseFloat(useRefs[6].current.value);
        const cm = ft !== 0 && (isNaN(inch) || inch === 0) ? (ft * 30.48) : (ft * 30.48) + (inch * 2.54);
        setResult({ cm: cm.toFixed(2) });
    };

    const convertTolbs = () => {
        const lbs = parseFloat(useRefs[7].current.value) * 2.20462262185;
        setResult({ lbs: lbs.toFixed(2) });
    };

    const convertTokg = () => {
        const kg = parseFloat(useRefs[8].current.value) * 0.453593;
        setResult({ kg: kg.toFixed(2) });
    };

    const reset = () => {
        setResult({
            cm: '',
            ft: '',
            inch: '',
            kg: '',
            lbs: '',
        });
        useRefs.forEach(ref => {
            ref.current.value = '';
        });
    };

    return (
        <>
            <div className="fitnessCalulator" id="fitnessCalulator">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="calculate-box main-box">
                                <Dropdown
                                    key={dropdowns[1].id}
                                    data={dropdowns[1].data}
                                    placeholder={dropdowns[1].placeholder}
                                    defaultItem={selectedData[dropdowns[1].id]}
                                    defaultDropdownItem={selectedData[dropdowns[1].id]}
                                    onSelectChange={(selectedItem) => handleDropdownChange(dropdowns[1].id, selectedItem)}
                                />
                                {/* <h2>{selectedData[dropdowns[1].id] ? selectedData[dropdowns[1].id].label : "None"}</h2> */}
                            </div>
                        </div>
                        {(selectedData[1] && (selectedData[1].label !== 'HEIGHT/WEIGHT CONVERTOR' && selectedData[1].label !== 'VO2 MAX')) && (
                            <>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-4 col-md-4">
                                                <div className="calculate-box input-dropdown">
                                                    <input type='number' ref={useRefs[0]} min="0" max="999" placeholder="Height" pattern="[0-9]*" maxLength="3" size="10" />
                                                    <Dropdown
                                                        key={dropdowns[2].id}
                                                        data={dropdowns[2].data}
                                                        placeholder={dropdowns[2].placeholder}
                                                        defaultItem={selectedData[dropdowns[2].id]}
                                                        defaultDropdownItem={selectedData[dropdowns[2].id]}
                                                        onSelectChange={(selectedItem) => handleDropdownChange(dropdowns[2].id, selectedItem)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-md-4">
                                                <div className="calculate-box input-dropdown">
                                                    <input type='number' placeholder="Weight" ref={useRefs[1]} />
                                                    <Dropdown
                                                        key={dropdowns[3].id}
                                                        data={dropdowns[3].data}
                                                        placeholder={dropdowns[3].placeholder}
                                                        defaultItem={selectedData[dropdowns[3].id]}
                                                        defaultDropdownItem={selectedData[dropdowns[3].id]}
                                                        onSelectChange={(selectedItem) => handleDropdownChange(dropdowns[3].id, selectedItem)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-md-4">
                                                <div className="calculate-box">
                                                    <input type='number' placeholder="Age" ref={useRefs[2]} />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-md-4">
                                                <div className="calculate-box">
                                                    <Dropdown
                                                        key={dropdowns[0].id}
                                                        data={dropdowns[0].data}
                                                        placeholder={dropdowns[0].placeholder}
                                                        defaultItem={selectedData[dropdowns[0].id]}
                                                        defaultDropdownItem={selectedData[dropdowns[0].id]}
                                                        onSelectChange={(selectedItem) => handleDropdownChange(dropdowns[0].id, selectedItem)}
                                                    />
                                                    {/* <p>Selected Data: {selectedData[dropdowns[0].id] ? selectedData[dropdowns[0].id].label : "None"}</p> */}
                                                </div>
                                            </div>
                                            {(selectedData[1] && (selectedData[1].label === 'TDEE (Total Daily Energy Expenditure)' || selectedData[1].label === 'CALORIE' || selectedData[1].label === 'CARBOHYDRATE INTAKE' || selectedData[1].label === 'FAT INTAKE' || selectedData[1].label === 'MACRO NUTRIENTS')) && (
                                                <>
                                                    {[4, 5].map((dropdownId) => (
                                                        <div className="col-xs-12 col-sm-4 col-md-4" key={dropdownId}>
                                                            <div className="calculate-box">
                                                                <Dropdown
                                                                    key={dropdowns[dropdownId].id}
                                                                    data={dropdowns[dropdownId].data}
                                                                    placeholder={dropdowns[dropdownId].placeholder}
                                                                    defaultItem={selectedData[dropdowns[dropdownId].id]}
                                                                    defaultDropdownItem={selectedData[dropdowns[dropdownId].id]}
                                                                    onSelectChange={(selectedItem) => handleDropdownChange(dropdowns[dropdownId].id, selectedItem)}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            )}
                                            {selectedData[1] && selectedData[1].label === 'WATER INTAKE' && (
                                                <>
                                                    {[5, 6].map((dropdownId) => (
                                                        <div className="col-xs-12 col-sm-4 col-md-4" key={dropdownId}>
                                                            <div className="calculate-box">
                                                                <Dropdown
                                                                    key={dropdowns[dropdownId].id}
                                                                    data={dropdowns[dropdownId].data}
                                                                    placeholder={dropdowns[dropdownId].placeholder}
                                                                    defaultItem={selectedData[dropdowns[dropdownId].id]}
                                                                    defaultDropdownItem={selectedData[dropdowns[dropdownId].id]}
                                                                    onSelectChange={(selectedItem) => handleDropdownChange(dropdowns[dropdownId].id, selectedItem)}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            )}
                                            <div className="col-xs-12 col-sm-4 col-md-4">
                                                <div className="calculate-box">
                                                    <button className="gradient-button" onClick={calculate}>CALCULATE</button>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-md-4">
                                                <div className="calculate-box bmiresult">
                                                    <input type="text" placeholder={loading ? 'Loading...' : result.value === '' ? 'result' : result.value} readOnly />
                                                    <p>{result.interpretation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {selectedData[1] && selectedData[1].label === 'VO2 MAX' && (
                            <>
                                <div className="col-xs-12 col-sm-4 col-md-4">
                                    <div className="calculate-box">
                                        <input type='number' placeholder="Age" ref={useRefs[2]} />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4">
                                    <div className="calculate-box">
                                        <input type='number' title="place two fingers on your neck and count the beats for 60 seconds." placeholder="Rest Heart Rate Per Minute" ref={useRefs[3]} data-tip="count the number of beats in 15 seconds. Multiply this number by four to calculate your beats per minute" />
                                        <small>Hint: count the number of beats in 15 seconds. Multiply this number by four to calculate your beats per minute</small>
                                    </div>
                                </div>
                                <div className="row center-lg">
                                    <div className="col-xs-12 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <button className="gradient-button" onClick={calculateVO2Max}>CALCULATE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4">
                                    <div className="calculate-box bmiresult">
                                        <input type="text" placeholder={loading ? 'Loading...' : result.value === '' ? 'result' : result.value} readOnly />
                                        <p>{result.interpretation}</p>
                                    </div>
                                </div>
                            </>
                        )}

                        {selectedData[1] && selectedData[1].label === 'HEIGHT/WEIGHT CONVERTOR' && (
                            <>
                                <div className="row">
                                    <h2>Height</h2>
                                    <div className="col-xs-12 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <input type='number' placeholder="centimeters (cm)" value={result.cm === '' ? "centimeters (cm)" : result.cm} ref={useRefs[4]} onChange={convertToFtInch} />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <input type='number' placeholder="feet (ft)" value={result.ft === '' ? "feet (ft)" : result.ft} ref={useRefs[5]} onChange={convertToCm} />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <input type='number' placeholder="inches (in)" value={result.inch === '' ? "inches (in)" : result.inch} ref={useRefs[6]} onChange={convertToCm} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <h2>Weight</h2>
                                    <div className="col-xs-12 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <input type='number' placeholder="Kilogram (kg)" value={result.kg === '' ? "Kilogram (kg)" : result.kg} ref={useRefs[7]} onChange={convertTolbs} />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <input type='number' placeholder="Pounds (lbs)" value={result.lbs === '' ? "Pounds (lbs)" : result.lbs} ref={useRefs[8]} onChange={convertTokg} />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <button className="gradient-button" onClick={reset} >RESET</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
