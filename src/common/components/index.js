export { default as DisplayLabel } from './DisplayLabel.vue';
export { default as Input } from './Input.vue';
export { default as UISwitch } from './Switch.vue';
export { default as Modal } from './Modal.vue';
export { default as Checkbox } from './Checkbox.vue';
export { default as AddPicker } from './AddPicker.vue';
export { default as Picker } from './Picker.vue';
export { default as MpPwdKeyboardInput } from './MpPwdKeyboardInput.vue';
export { default as Tabs } from './Tabs.vue';
export { default as DatePicker } from './DatePicker.vue';



//懒加载  + 代码分割chunk （android 有时会失效 导致页面加载不了组件 不再使用）
// export const DisplayLabel = r => require.ensure([], () => r(require('./DisplayLabel')), 'component')
// export const Input = r => require.ensure([], () => r(require('./Input')), 'component')
// export const UISwitch = r => require.ensure([], () => r(require('./Switch')), 'component')
// export const Modal = r => require.ensure([], () => r(require('./Modal')), 'component')
// export const Checkbox = r => require.ensure([], () => r(require('./Checkbox')), 'component')
// export const AddPicker = r => require.ensure([], () => r(require('./AddPicker')), 'component')
// export const Picker = r => require.ensure([], () => r(require('./Picker')), 'component')
// export const MpPwdKeyboardInput = r => require.ensure([], () => r(require('./MpPwdKeyboardInput')), 'component')
// export const Tabs = r => require.ensure([], () => r(require('./Tabs')), 'component')
// export const DatePicker = r => require.ensure([], () => r(require('./DatePicker')), 'component')





//未使用组件
// export const Select = r => require.ensure([], () => r(require('./Select')), 'component')
// export const Header = r => require.ensure([], () => r(require('./Header')), 'component')
// export const ProvinceCityArea = r => require.ensure([], () => r(require('./ProvinceCityArea')), 'component')

// export { default as Header } from './Header.vue';
// export { default as Select } from './Select.vue';
// export { default as ProvinceCityArea } from './ProvinceCityArea.vue';
