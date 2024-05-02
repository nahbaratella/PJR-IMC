import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha seu peso e sua altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular IMC");

    function imcCalculator(){
        return  setImc((weight/(height*height)).toFixed(2))
    }
     return (
        <View>

            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex.1.75"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 85.766"
                keyboardType="numeric"
                />

                <Button
                title={textButton}
                />


            </View>

        </View>
    );
}