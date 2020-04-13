/*
Copyright (c) Walmart Inc.

This source code is licensed under the Apache 2.0 license found in the
LICENSE file in the root directory of this source tree.
*/

import { config, IMessageEncoder } from "@walmartlabs/cookie-cutter-core";
import { IQueueConfiguration, IQueueSourceConfiguration } from "..";

@config.section
export class QueueConfiguration implements IQueueConfiguration {
    @config.field(config.converters.string)
    public set url(_: string) {
        config.noop();
    }
    public get url(): string {
        return config.noop();
    }

    @config.field(config.converters.string)
    public set storageAccount(_: string) {
        config.noop();
    }
    public get storageAccount(): string {
        return config.noop();
    }

    @config.field(config.converters.string)
    public set storageAccessKey(_: string) {
        config.noop();
    }
    public get storageAccessKey(): string {
        return config.noop();
    }

    @config.field(config.converters.string)
    public set queueName(_: string) {
        config.noop();
    }
    public get queueName(): string {
        return config.noop();
    }

    @config.field(config.converters.number)
    public set retryCount(_: number) {
        config.noop();
    }
    public get retryCount(): number {
        return config.noop();
    }

    @config.field(config.converters.timespan)
    public set retryInterval(_: number) {
        config.noop();
    }
    public get retryInterval(): number {
        return config.noop();
    }

    @config.field(config.converters.none)
    public set encoder(_: IMessageEncoder) {
        config.noop();
    }
    public get encoder(): IMessageEncoder {
        return config.noop();
    }
}

@config.section
export class QueueSourceConfiguration extends QueueConfiguration
    implements IQueueSourceConfiguration {
    @config.field(config.converters.number)
    public set numOfMessages(_: number) {
        config.noop();
    }
    public get numOfMessages(): number {
        return config.noop();
    }

    @config.field(config.converters.timespanOf(config.TimeSpanTargetUnit.Seconds))
    public set visibilityTimeout(_: number) {
        config.noop();
    }
    public get visibilityTimeout(): number {
        return config.noop();
    }
}
