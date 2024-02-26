import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'


type Mode = "contained" | "outlined" | "elevated" | "text"
type TodyButtonProps = React.PropsWithChildren<TouchableOpacityProps & {
    title?: string
    size?: 'sm' | 'md' | 'lg'
    mode?: Mode
    fullWidth?: boolean
}>

const TodyButton = ({
    children,
    title,
    size = 'md',
    mode = 'contained',
    style,
    fullWidth = false,
    onPressIn,
    onPressOut,
    ...rest
}: TodyButtonProps) => {
    const [isHover, setIsHover] = useState(false)
    const sizes = {
        sm: 10,
        md: 15,
        lg: 20
    }

    const modeStyles: {
        [key in Mode]: {
            touchable?: ViewStyle & { hover?: ViewStyle },
            title?: TextStyle & { hover?: TextStyle },
        }
    } = {
        contained: {
            touchable: {
                backgroundColor: '#24A19C',
                hover: {
                    backgroundColor: '#096C68'
                }
            },
        },
        outlined: {
            touchable: {
                backgroundColor: 'transparent',
                borderColor: '#24A19C',
                hover: {
                    borderColor: '#096C68'
                }
            },
            title: {
                color: '#24A19C',
                hover: {
                    color: '#096C68'
                }
            }
        },
        elevated: {
            touchable: {
                backgroundColor: '#F2F9F9',
                elevation: 5,
                hover: {
                    borderColor: '#9ED2D0'
                }
            },
            title: {
                color: '#24A19C',
                hover: {
                    color: '#096C68'
                }
            }
        },
        text: {
            touchable: {
                backgroundColor: 'transparent',
                hover: {
                    // opacity: 0.5
                }
            },
            title: {
                color: '#24A19C',
                hover: {
                    color: '#096C68'
                }
            }
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            accessibilityRole='button'
            style={[
                styles.touchable,
                {
                    paddingVertical: sizes[size],
                    width: fullWidth ? '100%' : 'auto',
                },
                modeStyles[mode].touchable || {},
                isHover && modeStyles[mode].touchable?.hover || {},
                style
            ]}
            onPressIn={(...args) => {
                setIsHover(true)
                onPressIn?.(...args)
            }}
            onPressOut={(...args) => {
                setIsHover(false)
                onPressOut?.(...args)
            }}
            {...rest}
        >
            {children && !title ? children : (
                <Text
                    style={[
                        styles.title,
                        modeStyles[mode].title,
                        isHover && modeStyles[mode].title?.hover || {},
                    ]}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    )
}

export default TodyButton

const styles = StyleSheet.create({
    touchable: {
        width: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 16,
        backgroundColor: '#24A19C',
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 1,
        borderWidth: 0.5,
        borderColor: '#F2F9F9'
    },
    title: {
        color: '#fff',
        fontSize: 18,
    }
})