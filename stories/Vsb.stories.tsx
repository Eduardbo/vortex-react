import React from "react";
import { VsbBotao } from "../src";
import { ComponentMeta, ComponentStory} from "@storybook/react";



export default {
    title: 'Componentes/vsbBotao',
    component: VsbBotao
} as ComponentMeta<typeof VsbBotao>

const Templete: ComponentStory<typeof VsbBotao> = () => <VsbBotao />;

export const Primario = Templete.bind( {} );