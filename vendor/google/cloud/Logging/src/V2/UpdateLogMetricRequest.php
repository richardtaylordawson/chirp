<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/logging/v2/logging_metrics.proto

namespace Google\Cloud\Logging\V2;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * The parameters to UpdateLogMetric.
 *
 * Generated from protobuf message <code>google.logging.v2.UpdateLogMetricRequest</code>
 */
class UpdateLogMetricRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * The resource name of the metric to update:
     *     "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     * The updated metric must be provided in the request and it's
     * `name` field must be the same as `[METRIC_ID]` If the metric
     * does not exist in `[PROJECT_ID]`, then a new metric is created.
     *
     * Generated from protobuf field <code>string metric_name = 1;</code>
     */
    private $metric_name = '';
    /**
     * The updated metric.
     *
     * Generated from protobuf field <code>.google.logging.v2.LogMetric metric = 2;</code>
     */
    private $metric = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $metric_name
     *           The resource name of the metric to update:
     *               "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     *           The updated metric must be provided in the request and it's
     *           `name` field must be the same as `[METRIC_ID]` If the metric
     *           does not exist in `[PROJECT_ID]`, then a new metric is created.
     *     @type \Google\Cloud\Logging\V2\LogMetric $metric
     *           The updated metric.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Logging\V2\LoggingMetrics::initOnce();
        parent::__construct($data);
    }

    /**
     * The resource name of the metric to update:
     *     "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     * The updated metric must be provided in the request and it's
     * `name` field must be the same as `[METRIC_ID]` If the metric
     * does not exist in `[PROJECT_ID]`, then a new metric is created.
     *
     * Generated from protobuf field <code>string metric_name = 1;</code>
     * @return string
     */
    public function getMetricName()
    {
        return $this->metric_name;
    }

    /**
     * The resource name of the metric to update:
     *     "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     * The updated metric must be provided in the request and it's
     * `name` field must be the same as `[METRIC_ID]` If the metric
     * does not exist in `[PROJECT_ID]`, then a new metric is created.
     *
     * Generated from protobuf field <code>string metric_name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setMetricName($var)
    {
        GPBUtil::checkString($var, True);
        $this->metric_name = $var;

        return $this;
    }

    /**
     * The updated metric.
     *
     * Generated from protobuf field <code>.google.logging.v2.LogMetric metric = 2;</code>
     * @return \Google\Cloud\Logging\V2\LogMetric
     */
    public function getMetric()
    {
        return $this->metric;
    }

    /**
     * The updated metric.
     *
     * Generated from protobuf field <code>.google.logging.v2.LogMetric metric = 2;</code>
     * @param \Google\Cloud\Logging\V2\LogMetric $var
     * @return $this
     */
    public function setMetric($var)
    {
        GPBUtil::checkMessage($var, \Google\Cloud\Logging\V2\LogMetric::class);
        $this->metric = $var;

        return $this;
    }

}

