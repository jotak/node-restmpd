/*
The MIT License (MIT)
Copyright (c) 2014 Joel Takvorian, https://github.com/jotak/mipod
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

"use strict";

module Options {
    export interface IOptions {
        dataPath?: string;
        useLibCache?: boolean;
        mpdRestPath?: string;
        libRestPath?: string;
        loadLibOnStartup?: boolean;
        mpdHost?: string;
        mpdPort?: number;
    }

    export class Options implements IOptions {
        constructor(public dataPath: string,
                    public useLibCache: boolean,
                    public mpdRestPath: string,
                    public libRestPath: string,
                    public loadLibOnStartup: boolean,
                    public mpdHost: string,
                    public mpdPort: number) {
        }
        static default(): IOptions {
            return new Options("data", true, "/mpd", "/library", false, "localhost", 6600);
        }
    }
}
export = Options