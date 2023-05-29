import { ImageResponse } from '@vercel/og';

export const config = {
    runtime: 'experimental-edge',
};

const font = fetch(new URL('../../assets/fonts/SourceSansPro-SemiBold.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer()
);

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req) {
    const fontData = await font;

    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Irsyad Notes';

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    backgroundColor: '#18181B',
                    backgroundImage:
                        'radial-gradient(circle at 25px 25px, dimgray 1%, transparent 0%), radial-gradient(circle at 75px 75px, dimgray 1%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    fontFamily: '"SourceSansPro"',
                    color: '#ffffff',
                    fontSize: 56,
                }}>
                <img
                    width='82'
                    height='82'
                    src='https://www.gravatar.com/avatar/6d999db3cd931c3ed11d21c36d533a5e?d=mm&s=256'
                    style={{
                        width: 82,
                        height: 82,
                        borderRadius: 128,
                    }}
                    alt='Irsyad A. Panjaitan'
                />
                <div
                    style={{
                        display: 'flex',
                        fontSize: 64,
                        fontStyle: 'normal',
                        marginTop: 30,
                        lineHeight: 1.1,
                        color: 'white',
                        whiteSpace: 'pre-wrap',
                    }}>
                    <b>{title}</b>
                </div>
                <span
                    style={{
                        marginTop: 16,
                        fontSize: 28,
                        color: '#A1A1AA',
                    }}>
                    Irsyad Notes
                </span>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'SourceSansPro',
                    data: fontData,
                    style: 'normal',
                },
            ],
        }
    );
}
