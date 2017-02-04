# coding: utf-8

"""
    BlueJeans onVideo REST API

    _Video That Works Where You Do, from the world's leader in cloud video communication._ # Authentication Each API request that is sent to BlueJeans requires an access token, which is obtained through the BlueJeans Authentication API. There are several methods (grant types) for obtaining an access token, which follow the OAuth2.0 specification. ## Grant Types * Authorization Code Grant – This grant type is used in an authentication flow commonly referred to as \"three-legged OAuth\". The user authenticates via a BlueJeans page, which provides an authorization code. This code, along with a few other elements, can be used to obtain an access code. * Password Credentials Grant – This grant type is used in a two-legged OAuth flow. Username and password are sent to retrieve an access code. * Client Credentials Grant – This grant type is used in a two-legged OAuth flow.  ## Access & Permissions The access level that is associated with each access token is referred to as the scope. There are three basic levels of access that BlueJeans allows, which affect the level of scope.  Three access levels exist within the Blue Jeans service today. * Meeting-level – Authentication takes place using a meeting ID and passcode, and the scope is limited to APIs that relate to the individual meeting. * User-level – Authentication either takes place via three-legged OAuth, or else a direct authorization token request containing a username or password. Access level depends on the requested scope permissions. * App-level – An application is provisioned either by BlueJeans personnel, or within the BlueJeans Enterprise Admin interface. When provisioning an app, a client key and secret are provided, which is then used to obtain an access token, via the BlueJeans Authentication API. The scope that is associated with the token will provide access to an entire enterprise and all of its users.  All endpoints in this document that require Enterprise Admin access will be marked as such. ## Testing In order to make effective use of this page, you will first use one of the authentication methods to obtain an access token. Once the token is given, use the Authenticate button up in the header to store the token. Each BlueJeans API called after that will use the access token provided. 

    OpenAPI spec version: 1.0.0
    Contact: brandon@bluejeans.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
"""

from pprint import pformat
from six import iteritems
import re


class NumbersNumbers(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, id=None, number=None, tollfree=None, premium=None, custom=None, country=None, country_name=None, state=None, city=None, label=None, default_settings_inherited=None, default=None):
        """
        NumbersNumbers - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'id': 'int',
            'number': 'str',
            'tollfree': 'bool',
            'premium': 'bool',
            'custom': 'bool',
            'country': 'str',
            'country_name': 'str',
            'state': 'str',
            'city': 'str',
            'label': 'NumbersLabel',
            'default_settings_inherited': 'bool',
            'default': 'bool'
        }

        self.attribute_map = {
            'id': 'id',
            'number': 'number',
            'tollfree': 'tollfree',
            'premium': 'premium',
            'custom': 'custom',
            'country': 'country',
            'country_name': 'countryName',
            'state': 'state',
            'city': 'city',
            'label': 'label',
            'default_settings_inherited': 'defaultSettingsInherited',
            'default': 'default'
        }

        self._id = id
        self._number = number
        self._tollfree = tollfree
        self._premium = premium
        self._custom = custom
        self._country = country
        self._country_name = country_name
        self._state = state
        self._city = city
        self._label = label
        self._default_settings_inherited = default_settings_inherited
        self._default = default

    @property
    def id(self):
        """
        Gets the id of this NumbersNumbers.


        :return: The id of this NumbersNumbers.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """
        Sets the id of this NumbersNumbers.


        :param id: The id of this NumbersNumbers.
        :type: int
        """

        self._id = id

    @property
    def number(self):
        """
        Gets the number of this NumbersNumbers.


        :return: The number of this NumbersNumbers.
        :rtype: str
        """
        return self._number

    @number.setter
    def number(self, number):
        """
        Sets the number of this NumbersNumbers.


        :param number: The number of this NumbersNumbers.
        :type: str
        """

        self._number = number

    @property
    def tollfree(self):
        """
        Gets the tollfree of this NumbersNumbers.


        :return: The tollfree of this NumbersNumbers.
        :rtype: bool
        """
        return self._tollfree

    @tollfree.setter
    def tollfree(self, tollfree):
        """
        Sets the tollfree of this NumbersNumbers.


        :param tollfree: The tollfree of this NumbersNumbers.
        :type: bool
        """

        self._tollfree = tollfree

    @property
    def premium(self):
        """
        Gets the premium of this NumbersNumbers.


        :return: The premium of this NumbersNumbers.
        :rtype: bool
        """
        return self._premium

    @premium.setter
    def premium(self, premium):
        """
        Sets the premium of this NumbersNumbers.


        :param premium: The premium of this NumbersNumbers.
        :type: bool
        """

        self._premium = premium

    @property
    def custom(self):
        """
        Gets the custom of this NumbersNumbers.


        :return: The custom of this NumbersNumbers.
        :rtype: bool
        """
        return self._custom

    @custom.setter
    def custom(self, custom):
        """
        Sets the custom of this NumbersNumbers.


        :param custom: The custom of this NumbersNumbers.
        :type: bool
        """

        self._custom = custom

    @property
    def country(self):
        """
        Gets the country of this NumbersNumbers.


        :return: The country of this NumbersNumbers.
        :rtype: str
        """
        return self._country

    @country.setter
    def country(self, country):
        """
        Sets the country of this NumbersNumbers.


        :param country: The country of this NumbersNumbers.
        :type: str
        """

        self._country = country

    @property
    def country_name(self):
        """
        Gets the country_name of this NumbersNumbers.


        :return: The country_name of this NumbersNumbers.
        :rtype: str
        """
        return self._country_name

    @country_name.setter
    def country_name(self, country_name):
        """
        Sets the country_name of this NumbersNumbers.


        :param country_name: The country_name of this NumbersNumbers.
        :type: str
        """

        self._country_name = country_name

    @property
    def state(self):
        """
        Gets the state of this NumbersNumbers.


        :return: The state of this NumbersNumbers.
        :rtype: str
        """
        return self._state

    @state.setter
    def state(self, state):
        """
        Sets the state of this NumbersNumbers.


        :param state: The state of this NumbersNumbers.
        :type: str
        """

        self._state = state

    @property
    def city(self):
        """
        Gets the city of this NumbersNumbers.


        :return: The city of this NumbersNumbers.
        :rtype: str
        """
        return self._city

    @city.setter
    def city(self, city):
        """
        Sets the city of this NumbersNumbers.


        :param city: The city of this NumbersNumbers.
        :type: str
        """

        self._city = city

    @property
    def label(self):
        """
        Gets the label of this NumbersNumbers.


        :return: The label of this NumbersNumbers.
        :rtype: NumbersLabel
        """
        return self._label

    @label.setter
    def label(self, label):
        """
        Sets the label of this NumbersNumbers.


        :param label: The label of this NumbersNumbers.
        :type: NumbersLabel
        """

        self._label = label

    @property
    def default_settings_inherited(self):
        """
        Gets the default_settings_inherited of this NumbersNumbers.


        :return: The default_settings_inherited of this NumbersNumbers.
        :rtype: bool
        """
        return self._default_settings_inherited

    @default_settings_inherited.setter
    def default_settings_inherited(self, default_settings_inherited):
        """
        Sets the default_settings_inherited of this NumbersNumbers.


        :param default_settings_inherited: The default_settings_inherited of this NumbersNumbers.
        :type: bool
        """

        self._default_settings_inherited = default_settings_inherited

    @property
    def default(self):
        """
        Gets the default of this NumbersNumbers.


        :return: The default of this NumbersNumbers.
        :rtype: bool
        """
        return self._default

    @default.setter
    def default(self, default):
        """
        Sets the default of this NumbersNumbers.


        :param default: The default of this NumbersNumbers.
        :type: bool
        """

        self._default = default

    def to_dict(self):
        """
        Returns the model properties as a dict
        """
        result = {}

        for attr, _ in iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """
        Returns the string representation of the model
        """
        return pformat(self.to_dict())

    def __repr__(self):
        """
        For `print` and `pprint`
        """
        return self.to_str()

    def __eq__(self, other):
        """
        Returns true if both objects are equal
        """
        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """
        Returns true if both objects are not equal
        """
        return not self == other
