import React from 'react';
import { Story, Meta } from '@storybook/react';
import FooterMain from '.';
import { FooterPropsType } from './types';

export default {
	title: 'Components/footer',
	component: FooterMain,
} as Meta<typeof FooterMain>;

const Template: Story<FooterPropsType> = (args) => <FooterMain {...args} />;

export const Footer: Story<FooterPropsType> = Template.bind({});

Footer.args = {
	language: {
		flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAB9CAMAAADQgdxqAAAAw1BMVEV0rN////9vqt6lx+n2tA76uA78+/vaw7fUuKjWuKTq2s728/LGiEbJoobNpIHLoHrOn3KzZgDKpZLWtZ3El3fElG3SmlutZQzalQnsqg707erfzMPOp5Djya/auJm4hGPo3tvXqH3Zs4rbtZLs5+rPkEXTjTHOggDJmGjamDC3fE3q1MDFjFHFhjy9eSPEfRXUjiW1dUGzcDK4bwCqYx7BjV/cqGvfpF3Ylz+7ejbclCHixKTJgyvSomy6fUHDdQCbTg7233zvAAADmklEQVR4nO3a23KqSBQG4KwZ6Ra6PcWIpBEFoZUISk5GNCL7/Z9qGqZm9u2+mFWzsdZXZcWKF8u/+kAffHgghBBCCCGEEEIIIYQQQgghhBBCyC/74048/HknHuBOUJDfDXoQroBzYL5AroMbpM/YTIFtA18A66OWQgzCAJ4ciDhMlzAOwHnCKwWoQVYKnBlkr7BcgvsNMwf8FUOrhhXEfGOeMiFVUoYmSBkIKdRZtR+gwArCB8AiCXEEpb9eJy9hFMNiDTDgSAXRutZwBELHySbR2TpeuuZNsnVgNMSqhxMkNH1oPAb/omSQf0dpZQdSvUTN/0DgTMRIQXaZgMplMnb2aXWUml/5dczcyvS3G840jNS1nFwHzHX9mu9X18OhGOzHWrguiChHGu0YQYRvepb/GokqT4u3ydyYvBfTPFXx1gVQKE95lCCPx6EDalOF+Xn+4fUsq+d9zOVtUX9l4AyOj10JYqL0pbbD/Jp/Fj2rZ1i94vN8DYStZb87g91nZmbyv+rRcVJYTXs0L6uYDIZNk4DKHISiGEGebro82UKNivmzZT3/85oXqc25HekUo2+hdC2mQvtU1O7tw+pdLp5x2ZomOR82p9MpUhglkYIwJhI+2M0vZpj/KDxv+8MMee9zzMMkMR9i1EQIwne7PNellvu5Z8aH92x4Zpx4873UZZnnux3CgguvRUI+a4NYz5733Pz1JrsBT0R3WsRQ0emkN8V70cy9TZBmBi7Obl2c7FB1JYh4THVk5qf+zMxaTZDttv0zL0YqsU+lvGHsFTFaxMnMxJR91cPBpG6a5HJpGqSeHEf1l29Wv8xHKIr2ZHdtEVzPP5/s20/zoA+79WQXj7PYgcytF1L+XGud87DamG38cNWZtVa7+nW3yyTN7eL979XvW5HmlYhe/S6tfg2WR8LsR4Qe7wfF4XA97nntuy4LdI6x0AKsIP23EWt2iGOzMeRaHqvj3olls0MU2S5EKYk02EW7Z49ezJ7drtLhtwykuITtnl11KQi0pyjONkw2iTuN11ybN7EWnTtFac+1YL2AOEpekvWalxDFICPWvXMtswxRNyWkCkpYLsNSKCnYkXfvpNF845XfnP1+p83Z7yZrzn7DFVo15GuFJweCFKZT4FF7Go93ho1+PwIL3tyPqBnr7v1IS/isubFSWGP8X3SH+Lu5nyD/9y8W/iv381sUQgghhBBCCCGEEEIIIYQQQgghhPyyvwBG1nt5iYy5LgAAAABJRU5ErkJggg==',
		label: 'ARG',
	},
	color: 'black',
	colorDivision: 'lightblue',
};
