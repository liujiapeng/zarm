export default interface PropsType {
  theme?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
  shape?: 'radius' | 'circle';
  value?: number;
  defaultValue?: number;
  step: number;
  min: number;
  max: number;
  block?: boolean;
  disabled?: boolean;
  onInputChange?: (value: number) => void;
  onChange?: (value: number) => void;
}