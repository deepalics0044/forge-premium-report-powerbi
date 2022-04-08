// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const mockedMethods = ['init', 'embed', 'bootstrap', 'load', 'get', 'reset', 'preload'];

const mockPowerBIService = jasmine.createSpyObj('mockService', mockedMethods);

export { mockPowerBIService, mockedMethods };