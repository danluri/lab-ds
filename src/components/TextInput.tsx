import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
    children: ReactNode;
}


function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300' >
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot> 
    )
}

// Componente não está sendo encontrado, irá forçar aparecer
TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInpuntInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInpuntInputProps) {
    return (
        <input
            className='bg-transparent flex-1 text-gray-100  outline-none text-xs placeholder:text-gray-400'
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}
