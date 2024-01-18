// https://tailwindcomponents.com/component/radio-buttons-1
'use client'
import { setCookie } from "cookies-next";
import { useState } from "react";
interface Props {
    currentTab?: number;
    tabOptions?: number[]
}

export const TabBar = ({ currentTab = 1, tabOptions = [1, 2, 3, 4] }: Props) => {

    const [selected, setSelected] = useState(currentTab)
    const onTabSelected = (tab: number) => {
        setSelected(tab)
        setCookie('selectedTab',tab.toString())
        
    }
    return (
        <div className={`
        grid w-full grid-cols-${tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}>
            {
                tabOptions.map((op) => {
                    return (
                        <div key={op} >
                            <input
                                checked={selected === op}
                                onChange={()=>{}}
                                type="radio" id="1" className="peer hidden" />
                            <label
                                onClick={() => onTabSelected(op)}
                                className="transition-all duration-700 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                                {op}
                            </label>
                        </div>
                    )
                })
            }

        </div>
    )
}