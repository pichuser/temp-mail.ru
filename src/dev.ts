import TempMailWrapper from '../lib/temp-mail';
TempMailWrapper.domains().subscribe((p) => {
    console.log('domains', p);
});