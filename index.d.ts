import { ComponentType } from 'react';
import IExtra from '@sc-reactkit/internal/interfaces/extra';
import IExtendClassProps from '@sc-reactkit/internal/interfaces/extend-class-props';
import ISpread from '@sc-reactkit/internal/interfaces/spread';

interface IPreloaderProps extends IExtra, IExtendClassProps {
  size?: 'default' | 'large' | 'medium' | 'small';
}

declare const Preloader: ComponentType<IPreloaderProps>;

interface IWithPreloaderProps extends IExtra, ISpread, IExtendClassProps {
  isLoading?: boolean;
  preloaderSize?: 'default' | 'large' | 'medium' | 'small';
}

declare const WithPreloader: ComponentType<IWithPreloaderProps>;

interface IPreloaderContainerProps extends IExtra, IExtendClassProps {
  isLoading?: boolean;
  isStretch?: boolean;
  size?: 'default' | 'large' | 'medium' | 'small';
}

declare const PreloaderContainer: ComponentType<IPreloaderContainerProps>;

export { IPreloaderContainerProps, IPreloaderProps, IWithPreloaderProps, PreloaderContainer, Preloader as default, WithPreloader as withPreloader };
