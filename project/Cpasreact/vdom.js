/**
 *
 * @param type
 * @param props
 * @param children
 * @returns {{type: *, props: {children: unknown[]}}}
 */
export function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                return {type: "object"}.type_check_v2(child)
                    ? child : createTextElement(child) }
            ),
        },
    }
}

/**
 *
 * @param text
 * @returns {{type: string, props: {nodeValue: *, children: []}}}
 */
function createTextElement(text) {

    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    }
}




/** Cpasreact.createElement
 const element = (
 <div id="foo">
 <a>bar</a>
 <b />
 </div>
 )*/
