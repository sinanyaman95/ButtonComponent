import { Button } from './Button'

export default {
    title: 'Button',
    component: Button,
}

export const Default = () => <Button> Test </Button>
export const Outline = () => <Button variant="outline"> Outline </Button>
export const Text = () => <Button variant="text"> Text </Button>
export const Secondary = () => <Button color="secondary"> Secondary </Button>
export const Danger = () => <Button color="danger"> Danger </Button>
export const StartIcon = () => <Button startIcon="star">Start</Button>
export const EndIcon = () => <Button endIcon="help outline">End</Button>
export const Small = () => <Button size="sm"> Small </Button>
export const Medium = () => <Button size="md"> Medium </Button>
export const Large = () => <Button size="lg"> Large </Button>
export const Disabled = () => <Button disabled> Disabled </Button>
export const NoShadow = () => <Button disableShadow> No Shadow </Button>
export const Combined = () => <Button size="sm" startIcon="star" color="danger" disableShadow>WOW</Button>
export const StartEnd = () => <Button startIcon="home" endIcon="help outline"> Both </Button>