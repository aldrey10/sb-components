import './MyLabel.css'

export interface Props {
    /**
     * Text to display
     */
    label: string;

    /**
     * Size to display
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3'

    /**
     * Capitalized all letters
     */
    capitalized?: boolean

    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

    /**
     * Font color
     */
    fontColor?: string

    /**
     * Barckground color
     */
    backgroundColor?: string

}

export const MyLabel = ({label, size = 'normal', capitalized = false, color, fontColor, backgroundColor = 'transparent'}: Props) => {
  return (
    <span className={`${size} ${color} ${fontColor}`} style={{color: fontColor, backgroundColor}}>{capitalized ? label.toUpperCase() : label}</span>
  )
}
